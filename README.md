# News Website

A fully responsive and modern news website offering trending news, global news, and categorized news with search functionality. **TailwindCSS** for styling, this website fetches real-time news articles using the **GNews API** and is deployed on **Firebase**.

## Project Details

This project aims to create a user-friendly platform to view and browse news articles from around the world. The website is fully responsive, ensuring a seamless experience across devices. The project incorporates efficient API data handling and pagination, offering smooth navigation despite the limitations of the free API version.

### Tech Stack:
- **Frontend**: React, TailwindCSS, HTML, JavaScript
- **Backend**: GNews API (free version)
- **Deployment**: Firebase

## Key Features:

- **Responsive Design**: The website is optimized for both mobile and desktop views.
- **Trending & Global News**: Offers users the ability to view top trending news and global headlines.
- **Categorized News**: Easily filter news by categories such as technology, business, sports, etc.
- **Search Functionality**: Search for news articles using keywords.
- **Pagination**: Implemented custom pagination due to API limitations.

## Links:
- **Live Demo**: [News Website on Firebase](https://acowale-news-68b1a.firebaseapp.com/)
- **Project Repository**: [GitHub Repository](https://github.com/sophia17032002/acowale-news-app/tree/main)

## Development Process

### Building the Website

One of the key challenges was ensuring that the website remained fully responsive across all screen sizes, which took considerable testing and iteration. The website also fetches news data from the **GNews API**, and because the free version has a limit of 10 articles per request with no pagination, I implemented a custom solution by splitting the data into multiple arrays.

### API Challenges

Since the **GNews API** free tier restricts responses to 10 articles per request and doesn't support pagination, I devised a workaround. I split the returned data into two arrays and created a manual pagination system to provide a smooth user experience. This extra step wouldn’t have been necessary with more flexible API options, but it helped maintain a functional and user-friendly interface.

### Hosting & Future Improvements

The website’s initial phase is complete, and it’s hosted on **Firebase** for easy access. Future updates will include user authentication, profile management, and the ability to save news articles. Many features are currently in development, including:

- **User Accounts**: Create and manage user profiles.
- **Saved Articles**: Allow users to bookmark and save articles for later.
- **Dark Mode**: Implement dark mode for improved accessibility.

## Future Enhancements

Here are some of the planned features and improvements:

- **User Profiles**: A feature that allows users to create and manage their profiles.
- **Saved News**: An option for users to save their favorite news articles.
- **Advanced Pagination**: A more robust pagination system that handles larger datasets.
- **Dark Mode**: A toggle for users to switch between light and dark modes.
- **Improved Performance**: Optimization of load times and API calls for smoother user experiences.

## Conclusion

This project was a great learning experience, allowing me to explore API limitations and work around them. With the core functionality now complete, I’m looking forward to implementing the additional features that will make the website even more dynamic and user-friendly.
