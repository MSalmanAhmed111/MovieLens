import pandas as pd
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from textblob import TextBlob


# Read the movies data from CSV
movies = pd.read_csv(r'D:\Study\Other Learning\React\Projects\MovieLens\movielens\src\utils\mymovie.csv', lineterminator='\n')

# Define the function to calculate the rating
def calculate_rating(vote_count, vote_average, minimum_votes, average_rating):
    rating = (vote_count / (vote_count + minimum_votes)) * vote_average + (minimum_votes / (vote_count + minimum_votes)) * average_rating
    return rating

# Define the function to calculate the rating
def calculate_rating(vote_count, vote_average, minimum_votes, average_rating):
    rating = (vote_count / (vote_count + minimum_votes)) * vote_average + (minimum_votes / (vote_count + minimum_votes)) * average_rating
    return rating

# Calculate the rating for each movie
for index, row in movies.iterrows():
    popularity = row['Popularity']
    vote_count = row['Vote_Count']
    vote_average = row['Vote_Average']
    minimum_votes = 100  # Set your desired minimum votes threshold
    average_rating = 6.0  # Set the average rating for movies with insufficient votes

    rating = calculate_rating(vote_count, vote_average, minimum_votes, average_rating)

    movies.at[index, 'Rating'] = rating

# Clean the movie titles
def clean_title(title):
    if isinstance(title, str):
        return re.sub("[^a-zA-Z0-9 ]", "", title)
    else:
        return ""

movies["Clean_Title"] = movies["Title"].apply(clean_title)

# Create the TF-IDF vectorizer
vectorizer = TfidfVectorizer(ngram_range=(1, 2))
tfidf = vectorizer.fit_transform(movies["Clean_Title"])

# Function to search for similar movies
def search(title):
    title = clean_title(title)
    query_vec = vectorizer.transform([title])
    similarity = cosine_similarity(query_vec, tfidf).flatten()

    # Combine similarity and rating for the final score
    combined_score = similarity * movies["Rating"]

    indices = np.argpartition(combined_score, -5)[-5:]
    results = movies.iloc[indices][::-1]
    return results.to_dict('records')  # Convert DataFrame to a list of dictionaries


def multiple_comments_sentiment_analysis(comments):
    sentiment_scores = []
    for comment in comments:
        blob = TextBlob(comment["comment"])
        average_score = blob.sentiment.polarity
        sentiment_scores.append({"comment": comment["comment"],"score": average_score })
        if average_score > 0.3:
            sentiment_scores[-1]["feedback"] = 'Great!'
        elif average_score < -0.3:
            sentiment_scores[-1]["feedback"] = "Bad."
        else:
            sentiment_scores[-1]["feedback"] = 'Average!'

    return (sentiment_scores)




from flask_cors import CORS

from flask import Flask, jsonify, request
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route('/getMovieBySearch', methods=['POST'])
def getMovieBySearch():
    payload = request.get_json()
    print(payload)
    title = payload["title"]
    data = {"Results": search(title)}
    return jsonify(data)

@app.route('/getSentimentOfMovieReviews', methods=['POST'])
def getCommentReviews():
    reviews = request.get_json()
    data = {"Results": multiple_comments_sentiment_analysis(reviews)}
    return jsonify(data)

@app.route('/')
def hi():
    return "welcome"

if __name__ == '__main__':
    app.run()
