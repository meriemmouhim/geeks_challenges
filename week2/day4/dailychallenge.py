import sqlite3
import requests
import random
conn = sqlite3.connect('postgres.db')
cursor = conn.cursor()
cursor.execute('''CREATE TABLE IF NOT EXISTS countries (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(50) NOT NULL,
                    capital VARCHAR(50) NOT NULL,
                    flag VARCHAR(50) NOT NULL,
                    subregion VARCHAR(50) NOT NULL,
                    population INTEGER NOT NULL)
    ''');

conn.commit();

def fetch_countries():
    response = requests.get('https://restcountries.com/v3.1/all')
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error fetching countries: {response.status_code}")
        return []
    
def insert_country(country):
    """Inserts a country into the database."""
    name = country['name']['common']
    capital = country.get('capital', [''])[0]
    flag = country['flags']['png'] if 'flags' in country and 'png' in country['flags'] else ''
    subregion = country.get('subregion', '')
    population = country.get('population', 0)
    
    cursor.execute('''
    INSERT INTO countries (name, capital, flag, subregion, population)
    VALUES (?, ?, ?, ?, ?)
    ''', (name, capital, flag, subregion, population))
    conn.commit()

def get_all_countries():
    cursor.execute('SELECT * FROM countries')
    countries = cursor.fetchall()
    return countries
    
def main():
    countries = fetch_countries()
    if countries:
        random_countries = random.sample(countries, 10)
        for country in random_countries:
            insert_country(country)
        print("10 random countries have been inserted into the database.")
        
        all_countries = get_all_countries()
        for country in all_countries:
            print(country)
    else:
        print("No countries were inserted into the database.")

if __name__ == "__main__":
    main()

# Close the database connection when done
conn.close()