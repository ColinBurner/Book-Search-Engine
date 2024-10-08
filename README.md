# Book-Search-Engine

## Description

This is a book search engine! You are able to search for books, save books to your profile for future reading/information and delete books once you're read them or no longer want to.

This application was refactored to use a GraphQL API instead of a RESTful API.

## Table of Contents

- [User Story](#user-story)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Visuals](#visuals)
- [Roadmap](#roadmap)
- [Questions](#questions)


## User Story

### GIVEN a book search engine
- **WHEN** I load the search engine
  - **THEN** I am presented with a menu with the options:
    - Search for Books
    - Login/Signup
    - An input field to search for books
    - A submit button

- **WHEN** I click on the "Search for Books" menu option
  - **THEN** I am presented with:
    - An input field to search for books
    - A submit button

- **WHEN** I am not logged in and enter a search term in the input field and click the submit button
  - **THEN** I am presented with several search results, each featuring:
    - Book’s title
    - Author
    - Description
    - Image
    - A link to that book on the Google Books site

- **WHEN** I click on the "Login/Signup" menu option
  - **THEN** a modal appears on the screen with a toggle between:
    - Login
    - Signup

#### Signup Flow:
- **WHEN** the toggle is set to "Signup"
  - **THEN** I am presented with:
    - Three inputs for:
      - Username
      - Email address
      - Password
    - A "Signup" button

#### Login Flow:
- **WHEN** the toggle is set to "Login"
  - **THEN** I am presented with:
    - Two inputs for:
      - Email address
      - Password
    - A "Login" button

#### Account Creation:
- **WHEN** I enter a valid email address and create a password and click on the "Signup" button
  - **THEN** my user account is created and I am logged into the site

#### Login:
- **WHEN** I enter my account’s email address and password and click on the "Login" button
  - **THEN** the modal closes and I am logged into the site

#### Logged-in State:
- **WHEN** I am logged in to the site
  - **THEN** the menu options change to:
    - Search for Books
    - See Saved Books
    - Logout

- **WHEN** I am logged in and enter a search term in the input field and click the submit button
  - **THEN** I am presented with several search results, each featuring:
    - Book’s title
    - Author
    - Description
    - Image
    - A link to that book on the Google Books site
    - A button to save a book to my account

#### Saving a Book:
- **WHEN** I click on the "Save" button on a book
  - **THEN** that book’s information is saved to my account

#### Viewing Saved Books:
- **WHEN** I click on the option to see my saved books
  - **THEN** I am presented with all of the books I have saved to my account, each featuring:
    - Book’s title
    - Author
    - Description
    - Image
    - A link to that book on the Google Books site
    - A button to remove a book from my account

#### Removing a Book:
- **WHEN** I click on the "Remove" button on a book
  - **THEN** that book is deleted from my saved books list

#### Logout:
- **WHEN** I click on the "Logout" button
  - **THEN** I am logged out of the site and presented with the original menu:
    - Search for Books
    - Login/Signup
    - Input field to search for books
    - Submit button

## Installation

N/A

## Usage

Search for a book! Any book you can think of, type it in the search bar and click submit search button. This will display all results for your input. Click login/sign up in the navbar to sign up for an account so that the application will remember your saved books. Once you have created an account, try another search for books you like and click the save this book! button. When you do, you'll see the button changed to say "This book has already been saved." Now you can go to the navbar in the top right and click "See Your Books" to see your saved books. On this page you can delete saved books.

## Visuals

Link to [Deployed Application](https://book-search-engine-ei85.onrender.com/)

![home page](https://github.com/user-attachments/assets/a1bd461f-69a3-4d5c-b995-e71130c593e5)

This is the home page of the application.

![search books](https://github.com/user-attachments/assets/43388913-b6e3-4264-953d-434510c8317c)

An example of searching for books.

![Saved books](https://github.com/user-attachments/assets/6d8738a6-7daf-4fc8-aa8b-5f5190fb4796)

An example of a user's saved books.


## License

This project is licensed under the MIT license. For more information, please visit [this link](https://opensource.org/licenses/MIT).


## Contributing
N/A

## Roadmap

This application is finished.

## Questions

If you have any questions about the repo, open an issue or contact me directly at b2rn3r@yahoo.com. You can find more of my work at [ColinBurner](https://github.com/ColinBurner/).