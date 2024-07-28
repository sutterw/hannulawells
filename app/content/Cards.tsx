import React from "react";
import Card from "./Card";

const Cards = () => {
    return (
        <div className="wrapper flex flex-wrap justify-around w-full max-w-screen-xl mx-auto py-12 gap-8">
            <Card
                image="/dog.png"
                title="The Pitfalls of Cyber Security Marketing"
                description="“It is not a matter of IF; it is a matter of WHEN”​
We have all heard it. We have used it ourselves to explain security, to help sell a solution, and everything in between. However, this statement has hurt us as an industry. It is taking a very complex situation and dumbing it down into a statement that says, “Yes, we are all screwed.”"
                author="-HannulaWells"
            />
            <Card
                image="/classroom.png"
                title="Improving Cybersecurity in Education Systems"
                description="Over the recent years, the education sector has become more susceptible to cyber hacks due to the following motives:
Financial gain – With Universities & Colleges handling a large number of student fees, they’re a prime target for cybercriminals;
Data theft – All institutions hold student and staff data, including sensitive details like names and addresses...

​"
                author="-Nick Walter (Acer)"
            />
            <Card
                image="/hands.png"
                title="The State of IT: 5 Things We Need for a Better Future"
                description="What a world we live in. Death by selfie is approximately 90 deaths per year. In other words, on average 90 people die because of the act of taking a selfie on their camera phone. This is the world that we live in today. Scary? Sure, if you think so. Awesome? Yeah, why not? How about extremely complicated but absolutely simplified?

I am most curious about..."
                author="-HannulaWells"
            />
        </div>
    );
};

export default Cards;
