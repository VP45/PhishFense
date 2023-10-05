Certainly, here's an extensive README for your AI/ML-Powered Phishing Domain Detection project, detailing the technologies used and key features:

# AI/ML-Powered Phishing Domain Detection

In the era of widespread phishing attacks, the need for a robust solution to identify malicious domains from newly registered websites is paramount. This project aims to develop an automated tool that leverages AI and ML, using open-source databases like WHOIS, to differentiate phishing domains from genuine ones. The tool employs backend code and content analysis, as well as web page image comparison to assign probability scores for phishing resemblance. The evaluation focuses on the tool's accuracy in identifying phishing domains' proximity to genuine ones, its ability to swiftly detect new threats, and its user-friendly interface for various output formats.

## Key Features

1. **Automated Phishing Domain Detection**

    - The system automates the process of identifying phishing domains among newly registered websites, reducing manual effort and response time.

2. **WHOIS Database Integration**

    - Utilizes WHOIS databases to access registration information for domains, including registration date and owner details, aiding in the detection process.

3. **Fetching Latest URLs**

    - Fetches the latest URLs in real-time to ensure that the tool stays up-to-date with newly registered domains.

4. **Phishing Website Detection and Block**

    - Implements an extension that detects phishing websites and blocks their usage, enhancing security for users.

5. **Block-to-Block Image Comparison**

    - Performs block-to-block image comparison of two websites to identify similarities and differences, helping in the detection of phishing attempts.

6. **Typosquatting Check**

    - Checks for typosquatting, a technique used by attackers to create domains that resemble genuine ones, and alerts users to potential threats.

7. **Chatbot**

    - Integrates a chatbot for user interaction and assistance, making it easier for users to utilize the tool effectively.

8. **Phished URLs Information**
    - Provides information about known phished URLs and examples of typosquats. Includes metadata related to typosquats of a particular domain.

## Technologies Used

### Frontend

-   [Next.js](https://nextjs.org/): A React framework for building user interfaces.
-   [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
-   [Clerk Auth](https://clerk.dev/): For user authentication.

### Backend

-   [Python](https://www.python.org/): The programming language used for backend development.
-   [FastAPI](https://fastapi.tiangolo.com/): A modern, fast (high-performance) web framework for building APIs.
-   [WHOIS](https://pypi.org/project/python-whois/): Python library for WHOIS data retrieval.
-   Machine Learning Libraries:
    -   [LightGBM](https://lightgbm.readthedocs.io/en/latest/): A gradient boosting framework.
    -   [scikit-image (skimage)](https://scikit-image.org/): A collection of algorithms for image processing.
-   [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/): For web scraping.
-   [OpenCV](https://opencv.org/): An open-source computer vision library.
-   [Requests](https://requests.readthedocs.io/en/master/): For making HTTP requests.
-   [Selenium](https://selenium-python.readthedocs.io/): A tool for web automation.
-   [Firebase](https://firebase.google.com/): For additional functionalities.

## Getting Started

-   Clone the repository.
-   Set up the necessary dependencies and configurations for both the frontend and backend.
-   Run the application, ensuring the frontend and backend are communicating correctly.

## Usage

1. Visit the website and log in using Clerk Auth.
2. Enter a domain or URL to be analyzed.
3. Explore the tool's features, including WHOIS data, image comparison, typosquatting checks, and more.
4. Engage with the chatbot for assistance and information.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

We would like to thank the open-source community for their contributions to the libraries and tools used in this project.

