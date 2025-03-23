import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()

class Database:
    _conn = None
    def get_connection():
        """Return a single connection to the database."""
        if Database._conn is None:
            Database._conn = psycopg2.connect(
                dbname=os.getenv('DB_NAME'),
                user=os.getenv('DB_USER'),
                password=os.getenv('DB_PASSWORD'),
                host=os.getenv('DB_HOST'),
                port=os.getenv('DB_PORT')
            )
        return Database._conn

    def close_connection():
        """Close the connection."""
        if Database._conn:
            Database._conn.close()
            Database._conn = None