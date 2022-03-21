# Ledn Token Interview Challenge

At Ledn, we are eager to find talented, resourceful, and passionate engineers to help us build the future of digital asset financial services. In light of this, we created a series of steps for us to know each other. One of these is a take home challenge, which will take a few hours to complete.

### Why a take-home challenge?

In-person coding interviews can be stressful and may hide your full potential. A take-home gives you a chance to work in a less stressful environment and showcase your talent.

### Our tech stack

As outlined in our job description, you will come across technologies which include a backend web framework (Typescript with NodeJS runtime) and a frontend library (React).

### Challenge Background

Ledn token is born! .. (fictional). Against our better judgement, we have rushed out our own token. We are now left with a lot of customer data and no way of capturing insights and managing accounts! Help us create a dashboard to better visualize our token holders' accounts. You are given a data set in the following format:

- `firstName` (Account Holder First Name)
- `lastName` (Account Holder Last Name)
- `country` (Country code)
- `email` (email)
- `dob` (Date of Birth)
- `mfa` (multi factor authentication possible values: [null, 'TOTP', 'SMS'])
- `amount` (Number of ledn tokens held)
- `createdAt` (Account creation date)
- `updatedAt` (Account updated date)
- `referredBy` (email of referral account)

In this repo is a sample data file [`accounts.json`](/accounts.json).

### Requirements

1. You need to create a frontend only web application displaying a table from the data provided.

2. Avoid UI libraries as much as possible and implement your own utilities, styles and UI components.

   - For example, we would like to see a Dropdown component implemented from scratch.
   - `react-table` or similar libraries should not be used in the challenge.

3. For each case, your data needs to be displayed or requested as follows:
   - The user should be able to sort accounts on number of Ledn tokens held or creation date.
   - The user should be able to filter on account country, on MFA type, and by name.
   - The user should be able to navigate the data using any kind of pagination.
4. Feel free to choose any React stack that can accomplish the requirements.

5. Consider this not just as a small challenge application, but as a starting point for an industrial application that will continue to grow, and that you've been selected as the lead for setting this up. You have complete control over how everything is done, organized and looks, so how would you setup your ideal application?

### Time Estimate

Estimated effort to complete this challenge is up to 6 hours, but don't hesitate to take more time if you want to show us your best effort.

### Submission

You may choose to submit your solution however you'd like. Feel free to send us a link to a hosted git repo, or send us your solution directly. Whichever method you choose, please include instructions on running your solution locally.

### Following Steps

Upon submission of the challenge, we will review your code and reach out to you with comments. If your submission passes our criteria, a following interview will be scheduled to discuss your implementation in further detail. We feel this is another great way to assess your understanding rather than on the spot coding exercises!

We want you to succeed as much as you do, so we wish you the best of luck! Looking forward to your submission!
