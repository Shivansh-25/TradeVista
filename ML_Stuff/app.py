import os
from datetime import datetime
import yfinance as yf
import matplotlib.pyplot as plt
from flask import Flask, request, send_file
from flask_cors import CORS
import matplotlib
matplotlib.use('Agg')  # Use headless Matplotlib

yf.pdr_override()

end = datetime.now()
start = datetime(end.year - 1, end.month, end.day)

from trial import predictStock


def plot(company):
    # Get the company symbol from the query parameters
    # company = request.args.get('company')
    print(company)
    plt.clf()
    # Fetch the company's data from Yahoo Finance
    data = ""
    data = yf.download(company, start, end)

    print(data.tail(10))

    # Create the plot
    data['Close'].plot()
    plt.title(f'{company} Stock Price')

    # os.makedirs(os.path.dirname(filename), exist_ok=True)

    plt.savefig("closingPrice.png", format='png')
    plt.clf()
    


app = Flask(__name__)
CORS(app)


@app.route('/plot')
def save_plot():
    company = request.args.get('company')
    filename = f"closingPrice.png"

    plot(company)

    # Serve the saved plot using send_file
    return send_file(filename, mimetype='image/png')


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/predict')
def predict():
    company = request.args.get('company')

    predictStock(company)
    filename = f"stock_prediction.png"

    return send_file(filename, mimetype='image/png')




if __name__ == '__main__':
    app.run(debug=True)
