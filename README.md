# ReactJS финален проект

# Електронно меню за ресторанти

## Описание на проекта


TheRestaurant Menu System contains a collection of restaurants that can be browsed by users.
Users can view restaurant menu and make a reservation.
All the registered restaurants are shown on the landing page.

- Home:
  Any user can view the available restaurants in the system on the home screen.


- Notifications:
  [React Toastify](https://github.com/fkhadra/react-toastify) is used for user notifications.

### Публична част (Достъпна за всеки потребител: Автентициран или Анонимен)

The public part of the Book Store is visible by any user without authentication:

- Login / Register
- Book Store with Search and pagination
- Home Page listing only the Top-rated book selection with pagination
- Book Details Page listing all books details (author, description, genres, price, image, number of likes and all reviews) and buttons for Like, Unlike, Order & toggle book Reviews.

### Private Part (Logged in users only)

- Shopping Cart with added items, an indicator whether the item is still available to order, functionality to add/remove items, update items' quantity or the entire cart
- Own Orders by status (My Orders) with an option for order cancellation for pending orders
- Order Details, including links to the ordered books and an indicator whether the books are still available in the online store
- Ordering a book from Store / Top-rated selection / Book Details Page
- Liking / Unliking a Book
- Writing a Review and deleting own reviews
- Downloading a book when the order is finalized (i.d. order status is Delivered)
- User's Profile with stats
  - Collection of user's e-books for download
  - Collection of user's favourite books
  - Collection of user's written book reviews
- Updating Profile data (email, password)
- Deleting the current user Profile
- Logout

### Administration Part (Logged in users in Admin role)

- Creating / Editing / Deleting Books
- Deleting Book Reviews
- Viewing all Orders
- Modifing the status of any Order (approving, cancelling, delivering)
- Uploading & deleting e-book files

## Front-end: React.js

## Back-end: SoftUni Practice Server

## ImageStorage: Firebase

## How to run this project

In the server project directory run:

### `node server.js`

In the client project directory run:

### `npm start`
