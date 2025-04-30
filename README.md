📝 Comment System (React + Redux Toolkit)
A simple full-stack web application for submitting and displaying comments. Built with React and Redux Toolkit, it allows users to add comments, view them, and manage state with Redux Toolkit.

🔧 Technologies Used
React

Redux Toolkit

jsonPlaceholder API

Bootstrap 5 (via CDN)

🚀 Installation
bash
Копировать
Редактировать
# Clone the repository
git clone https://github.com/yourusername/comment-system.git
cd comment-system

# Install dependencies
npm install

# Start the development server
npm start
The application will be available at http://localhost:3000.

🖥️ Project Structure
pgsql
Копировать
Редактировать
/comment-system
  /public
    index.html
  /src
    /components
      AddCommentForm.js
      CommentsList.js
    /redux
      commentsSlice.js
    App.css
    App.js
    index.js
  package.json
/components: Contains React components for adding and displaying comments.

/redux: Contains Redux slices for managing the state of comments.

App.css: Contains the CSS styles for the application.

App.js: The main React component that ties everything together.

index.js: The entry point of the app.

🔄 Contributing
Fork the repository.

Create a new branch (git checkout -b feature/your-feature).

Make your changes.

Commit your changes (git commit -am 'Add new feature').

Push to your branch (git push origin feature/your-feature).

Create a pull request.

📜 License
This project is licensed under the MIT License - see the LICENSE file for details.