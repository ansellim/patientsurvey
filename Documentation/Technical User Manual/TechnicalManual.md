# Deployment of the app

1. This app is an end-to-end feedback system that allows hospital operators to collect patient experience feedback at their bedsides using a survey tool that then feeds the collected responses into a backend system. The hospital operators then access the feedback collected via a gated dashboard frontend that consolidates these feedback findings and presents them in a manner that encourages more holistic decision making. The operators can also track complaint cases via a ticketing system as part of the dashboard platform.

2. The app is readily assessed via the following links: 
	a. Survey Frontend: HTTP://34.125.120.160:3000
	b. Dashboard Frontend: HTTP://34.125.120.160:4200
	c. Administrator Backend: HTTP://34.125.120.160:3006

3. The app runs via docker-compose; of which details of deployment are provided in the README.md in the main folder. 

4. Behind docker-compose, the app is a MERN stack solution running on the following platforms: 
	a. React.js for the frontend development
	b. Express.js for middleware
	c. MongoDB for backend data repository (which connects both patient frontend and hospital operator frontend).
	d. Node.js for connecting the app as a unified stack.
	 
# Instructions for using the app

1. There are 3 sets of users whom will interface different parts of the app.

2. Survey Frontend. As a Patient or Feedback Provider, the primary usage is via the Survey frontend; whereby the Patient or Feedback Provider can fill up a survey that caters to their specific journey. This can be done via filling in a specific survey (i.e. feedback over a specific incident, such as filing a complaint over dirty bedsheets in a ward), or a general survey (which provides feedback on the quality of efficiency, hospitality, staff and doctor service performance). 
	a. To use this frontend, the patient or feedback provider just needs to assess the survey link provided at the following URL: HTTP://34.125.120.160:3000
	b. A survey will be made available, whereby the patient / feedback provider can then key in his/her identity for this survey, and the purpose (either specific, general or both).
	c. The user will then fill in the surveys as per the designed conditional logic flow of the frontend. 
	d. All surveys completed are directly fed into the Dashboard Frontend for operators.
	e. When completed, a thank you message will show up, and the user is taken back to the start of the survey form. 
	
3. Dashboard Frontend. As a hospital operator, the main focus is to use the Dashboard frontend to keep an eye over the hospitals' overall service performance, which covers overarching measures such as Satisfaction levels or Net Promoter Score, and also allows deep-dives by department or by time. This platform also allows feedback ticketing, which allows the operators to deep dive and track into specific complaints that need follow up. All in all, this helps operators better manage their service quality indicators.
	a. To use this frontend, the operator first needs to login using his/her credentials at the following URL: HTTP://34.125.120.160:4200
	b. The operator is taken to the Dashboard, of which several important management items are presented (such as Key Performance Indicators, Category Performance, Specific Verbatim, and Charts). 
	c. On the Dashboard, there are also filters of which the operator can adjust the data presented towards the department or date of interest. 
	d. There are also other pages that the operator can access: 
		(1) Employee performance. This showcases the specific management measures by employee type (between Doctor or Staff).
		(2) Ticketing system. This highlights a list of all tickets created via specific feedback complaints made, and are categorized between Open, In Progress, or Resolved. Status changes made here are live and can be adjusted with persistence.
		(3) Wordcloud. This displays a wordcloud of the most frequent words highlighted by all feedback collected so far. This gives operators a good high level understanding of the items that weigh heaviest in the minds of current patients and feedback providers. 

4. Administrator Backend. Administrators may wish to assess the backend via MongoDB or via the following URL: HTTP://34.125.120.160:3006. This allows administrators to check in on the status of the system, including how data flows in, where bugs might arise, system availability etc. 


