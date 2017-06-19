# Reference Docs Feedback
---

## I.A. Structure
1. In the general layout, the [**body content**](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/overviews/steps-to-build-a-custom-skill) takes up around 50% of the page space, with both left and right margin navigation utilizing the remaining space. This makes the text slightly smaller and a bit harder to read, even on larger screens of a laptop. Admittedly, I use glasses and just recently graduated to progressive lenses at that, but I had to use Ctrl-+ in order to increase the font size in order to make the documentation more easily readable.

2. It appears the content is not designed to be mobile responsive. I tried to read the docs on an iPad Mini (7.9") and an iPad standard (10.1"), and the layout is consistent with the desktop experience.

3. Information design is inconsistent. I suspect that the Voice Design section is very recent as it includes a more readable layout and the text has a different tone with more best practice, experience design information. But, in comparison to the reference documentation from which the section is accessed, it feels like you've gone some where entirely different even though you're still on developer.amazon. There's a link to return to developer.amazon in the upper right corner implying you've gone somewhere else, even though you have not. (Side note: I think that the link destination might actually be a bug. Clicking that link doesn't return you to the [**Getting Started with the Alexa Skills Kit**](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/getting-started-guide) pages but instead to the [**top-most developer.amazon.com content**](https://developer.amazon.com/alexa-skills-kit).)

## Content
1. Prosody can be fairly self-referential. For example, on the [**Designing for Voice**](https://developer.amazon.com/designing-for-voice/design-process/) section of the documentation, the article leads with this deading:
  **Establish the purpose and user stories**
  _Start with what people want to accomplish, and determine the capabilities of your skill and the benefits of using it. Then, identify stories that describe what people need to and can do. Later, use scripts and flows to identify details and variations for the interactions._
The way I read this block is to create the user stories by describing what people need to do, which is the very definition of a user story.

2. Similarly, the [**Handling Requests Sent by Alexa** ](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/handling-requests-sent-by-alexa) page has this starting block:
**Most of the coding tasks for the cloud-based service for a custom skill are related to:**
_Handling the different types of requests sent by the Alexa service.
Returning appropriate responses to these requests._
The way I read this is to say that Alexa requires responding to an API, but aren't the tasks listed essentially *all* the coding tasks in developing an API service? Elements like logging and telemetry are gravy but unless an API can handle a request and return a response it isn't an API.

3. The embedded videos are pretty small, so they're really only viewable if you expand them to full screen.

4. None of the articles are date stamped, or have a version associated to them. For articles that talk about future features, it might be helpful to track how things have changed since a dev has implemented a skill. A few pages I read made reference to developer contests for winning an Alexa shirt or a hoodie, which appears to be dated as the current prize is an Echo Dot.

5. Page titles and the url naming are often different.

6. In general, I follow the UNIX principle when it comes to documentation: explain one thing and one thing only. Several documents collapse their title's topic with secondary information detailed in other documents. As an example, on [**Set Up a Skill > Create a Lambda Function for a Custom Skill**](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function) page, there are details on a sample interaction model, despite there being a dedicated page on that topic as well at **Build the Interaction Model (Intents, Slots, and Dialogs)**.

7. Similarly, identical (or nearly-so) concepts appear in multiple topic areas. For example, under **Getting Started with Sample Code > Deploy a Sample Custom Skill as a Web Service** includes details about AWS Elastic Beanstalk. While in the **Under Test Your Skill** subheader there is a document titled [**Deploying a Web Service for a Custom Skill to AWS Elastic Beanstalk**](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/deploying-a-web-service-for-an-alexa-skill-to-aws-elastic-beanstalk) page. The content is also different.

8. Documents include excessive link outs prior to getting to the core of the content. For example, [**Set Up a Skill > Creating an AWS Lambda Function for a Custom Skill**](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function) has no fewer than 8 links to things like the Lambda pricing, AWS, and security best practices before getting to the red meat on the topic.

9. Github/alexa sample code is entirely JavaScript/Node.js based, but code samples in the docs are Java. Perhaps there is a way to incorporate multiple code bases into the documentation. The [**Mashape API documentation marketplace**](https://market.mashape.com/vivekn/sentiment-3) does a pretty good job of displaying code side-by-side.

10. The documentation taxonomy regularly implies AWS Lambda and other services operate differently. AWS Lambda has the least friction for supporting Alexa custom skill logic. It provides transparent auto-scaling, SSL security, with a drag-n-drop ARN for the Alexa Interaction Model Builder and is currently free for 1M requests, 400k GB-seconds of compute time. However, for large ODM / IHV partners, it's more likely they would host from their own server infrastructure. (By means of perspective T-Mobile was going to service Alexa calls from a hybrid mixture of dedicated data center iron and EC2 instances. This was because AWS Lambda was an unapproved service by the InfoSecurity team.)

11. [**On the best practices for utterances page**](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/ask-bp-sample-utterances) I'm surprised there isn't some data-driven feedback gathered from the past few months' corpus of utterances processed. As an example, the article makes a distinction between noun ("the horoscope for"), question ("what is the horoscope for") and verb ("give me the horoscope for") utterances. Are there data to share with developers on the distribution of usage of utterances? It might be of value to developers who are creating Skills for particular audiences or in particular regions to know if utterance patterns differ.

12. Is there a lag-time for documentation to be published? I just saw a commercial for Alexa being able to make voice calls and messaging, but there's nothing published in the developers section. 

## Personal Notes
Full disclosure, I attempted to do an A-Z read through of the developer reference documentation, but regularly got lost along the way. I actually ended up making more use of GitHub repositories and NPM documentation. BTW, I'm in awe of the spectacular work of [**David Isbitski**](https://www.npmjs.com/package/alexa-sdk) and [**Jeff Blankenburg**](https://github.com/alexa/skill-sample-nodejs-fact). High-five to both of them!

The number of GitHub repos with 'Alexa' in the name is pretty impressive (a bit over 3k). What really surprised me were the number of [**alternative**](https://github.com/stojanovic/alexa-skill-kit) [**framework**](https://github.com/alexa-js/alexa-app) [**libraries**](https://github.com/Accenture/alexia) for Alexa skill development.

I can definitely see the need for a strong, experienced evangelism team.
