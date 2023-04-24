from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('back.html')

@app.route('/save_response', methods=['POST'])
def save_response():
    response = request.form['response']
    conn = sqlite3.connect('responses.db')
    conn.execute("INSERT INTO responses (response) VALUES (?)", [response])
    conn.commit()
    conn.close()
    return 'Response saved successfully'

if __name__ == '__main__':
    app.run(debug=True)
