# Main application entry point for RestauSync Flask app
# This initializes the Flask app
from app import create_app

app = create_app()

# Run the application in debug mode when executed directly
if __name__ == '__main__':
    app.run(debug=True)