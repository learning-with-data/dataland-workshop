import React, { useState, useEffect } from "react";

import { decode } from "base64-arraybuffer";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import apiClient from "../../api";
import Editor from "../../Editor";
import "./style.css";
import Popup from "../../Popup";

import popupTexts from "./popup-content.json";

import penguin_fishing_img from "../../img/penguin_fishing.jpg";
import penguin_div_img from "../../img/penguin-div.jpg";
import penguin_bill_img from "../../img/penguin_bill.png";
import data_snapshot_1 from "../../img/data-snapshot-1.png";
import data_snapshot_2 from "../../img/data-snapshot-2.png";
import data_snapshot_3 from "../../img/data-snapshot-3.png";

const NOTEBOOK_ID = 1;
const initialProjects = [
  {
    title: "Project 1",
    description: "",
    notebookId: NOTEBOOK_ID,
    notebookSequence: 1,
  },
  {
    title: "Project 2",
    description: "",
    notebookId: NOTEBOOK_ID,
    notebookSequence: 2,
  },
  {
    title: "Project 3",
    description: "",
    notebookId: NOTEBOOK_ID,
    notebookSequence: 3,
  },
  {
    title: "Project 4",
    description: "",
    notebookId: NOTEBOOK_ID,
    notebookSequence: 4,
  },
  {
    title: "Project 5",
    description: "",
    notebookId: NOTEBOOK_ID,
    notebookSequence: 5,
  },
  {
    title: "Project 6",
    description: "",
    notebookId: NOTEBOOK_ID,
    notebookSequence: 6,
  },
  {
    title: "Project 7",
    description: "",
    notebookId: NOTEBOOK_ID,
    notebookSequence: 7,
  },
  {
    title: "Project 8",
    description: "",
    notebookId: NOTEBOOK_ID,
    notebookSequence: 8,
  },
  {
    title: "Project 9",
    description: "",
    notebookId: NOTEBOOK_ID,
    notebookSequence: 9,
  },
  {
    title: "Project 10",
    description: "",
    notebookId: NOTEBOOK_ID,
    notebookSequence: 10,
  },
  {
    title: "Project 11",
    description: "",
    notebookId: NOTEBOOK_ID,
    notebookSequence: 11,
  },
  {
    title: "Project 12",
    description: "",
    notebookId: NOTEBOOK_ID,
    notebookSequence: 12,
  }
];

function CreatePopup(popupTexts, keyword) {
  const popupText = popupTexts.find(function (item) {
    return item.title === keyword;
  });
  return <Popup title={popupText.title} content={popupText.content} />;
}

function Story() {
  const projectsService = apiClient.service("projects");
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const getProjectList = async () => {
      const result = await projectsService.find({
        query: {
          notebookId: NOTEBOOK_ID,
          $select: ["id"],
          $sort: { notebookSequence: 1 },
        },
      });
      if (result.total === 0) {
        // No projects exist, create from seed projects
        // Dynamic import is used to reduce unnecessary loads of the seed file
        let { default: projectBlobs } = await import("./blobs.json");

        projectBlobs.forEach((blob, i) => {
          initialProjects[i].projectBlob = decode(blob);
        });
        const newProjects = await projectsService.create(initialProjects);
        setProjectsList(newProjects.map((project) => project.id));
      } else {
        setProjectsList(result.data.map((project) => project.id));
      }
    };
    getProjectList();
  }, []);

  if (projectsList.length === 0) {
    return (
      <>
        <Spinner animation="border" role="status" />
        Loading…
      </>
    );
  }
  return (
    <>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h1>A Traveling Penguin’s Tale</h1>
          <div className="img-container-front">
            <img src={penguin_fishing_img} className="img-fluid img-front" />
          </div>
          <p>
            Hi there, the walking one—I mean, the human over there. Yes, I am
            talking to you. Is it so rare seeing a penguin talking?
          </p>
          <p>
            What am I doing? Oh, just fishing by the side of this iceberg. But human, I do want to ask you to do me a favor.
          </p>
          <p>
            I am one who loves traveling the world, and I only go back to my land from time to time. There lives my cousin, and he always welcomes me back. However, this year I went back to the land, however, he wasn’t there. I asked our families, and no one knew where he had gone.
          </p>
          <p>
            Everyone’s kinda worried. They asked me - the smartest one of the entire family, thank you - to figure out where he is. I personally also want to find him of course - I want to tell him about the human boats that I saw on this trip - he doesn’t like swimming and is always interested in alternatives.
          </p>
          <p>
            A friend told me that there have been a group of you out there these days, following us everywhere. I heard you are called “researchers” and you are studying us - not sure what that means. But I wonder if I can use your help - could you help me find my cousin?
          </p>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h2>
            Task 0: A Useful Tool Called “Datasets”
          </h2>
          <p>
            How? The other day I heard some of you talking about the thing called Datasets. They are quite useful tools and have information about us, that’s what I heard. Can you show me some of those to see if that is helpful?
          </p>

          <div className="task-container">
            <h4>
              Task 0.1: The penguin is trying to understand what the penguin dataset is about. Help them out!
            </h4>
            <p>
              The following is a snapshot (i.e., first few rows) of the dataset:
            </p>
            <div className="img-container-front">
              <img src={data_snapshot_1} className="img-fluid img-front" />
            </div>
            <p>
              Use Dataland to explore the dataset! 
            </p>
            <ul>
              <li>
                What do you think each row represents?
              </li>
              <li>
                Think about what the columns are about. How do you think humans may have gathered data for each column? Skim through the data rows. What are the names and scales of measurements that humans use to describe penguins and islands? What does it mean to categorize and measure things this way?
              </li>
            </ul>
            <Row>
              <Editor projectId={projectsList[0]} hideDataImportButton={true} />
            </Row>
          </div>
          
          <p>
            Ah, I think I get it now. In this dataset, every row is a record of a penguin in a particular year and every column is a characteristic of the penguin - that’s quite neat! So I can find my cousin if I know which row is him in the year of 2021!
          </p>
          <p>
            But there are so many rows… I really need a way to narrow it down. 
          </p>
          <hr />
        </Col>
      </Row>


      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h2>Task 1: Narrowing It Down</h2>

          <p>
            Oh hey I have an idea! There are different groups of us - you humans call that “species”.  Let’s first narrow it down to the rows that are our species. Unfortunately I don’t know the name of the species that you human researcher used to call us. What I do know is that we have the shortest flipper length  and are the lightest in weight compared to other species of penguins. Can you do something with the dataset to find what species we are?
          </p>

          <div className="task-container">
            <h4>
              Task 1.1: Create Scatter Plots of penguin characteristics and find the name of the species that is smallest in size.
            </h4>
            <ul>
              <li>
                Hint 1: Plot the flipper length vs body mass. You can hover your mouse over the data points on the graph to see other details.
              </li>
              <li>
                Hint 2: Use different colors for species.
              </li>
              <li>
                See tutorial cards on scatter plots for more instructions
              </li>
            </ul>
            <Row>
              <Editor projectId={projectsList[1]} hideDataImportButton={true} />
            </Row>
          </div>

            <p>
              Ah, that is us! That’s great! Next, can you only plot the data about our species? 
            </p>
          

          <div className="task-container">
            <h4>
              Task 1.2: Create a Scatter Plot of flipper length vs body mass of only the species that you identified in the last task.
            </h4>
            <ul>
              <li>
                Hint: Use the Filter block.
              </li>
            </ul>
            <Row>
              <Editor projectId={projectsList[2]} hideDataImportButton={true} />
            </Row>
          </div>

            <p>
              Aha! That’s much fewer dots! I’m called the smallest of all my family for a reason. Let’s see what else is about my cousin. Oh right, my cousin is definitely under 4500 grams in body mass - he is not that big.
            </p>
          

          <div className="task-container">
            <h4>
              Task 1.3: On top of the last scatter plot, narrow it down to penguins with a body mass lower than 4500.
            </h4>
            <ul>
              <li>
              Hint: Use more than one condition. You can use more than one condition in the filter block by clicking on the plus icon at the end of the block. You can also use more than one filter block.
              </li>
            </ul>
            <Row>
              <Editor projectId={projectsList[3]} hideDataImportButton={true} />
            </Row>
          </div>

            <p>
              This filter thing is really neat - isn't it? I’m impressed - I am usually hard to be impressed as a side note. Just curious, I want to know how many records that we have so far?
            </p>

          <div className="task-container">
            <h4>
              Task 1.4: Make a program to count the number of rows that fits the current condition
            </h4>
            <ul>
              <li>
                Hint 1: Use the Variable block to help with the counting.
              </li>
              <li>
              Hint 2: After running the program, you can view the value of variable in the panel on the right.
              </li>
            </ul>
            <Row>
              <Editor projectId={projectsList[4]} hideDataImportButton={true} />
            </Row>
          </div>

            <p>
              Great! I do remember hearing from my parents that our extended family is around 200 in size, so this number seems close enough.
            </p>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h2>Act 2: Where and Why</h2>

          <p>
            Okay, we have narrowed it down quite a bit! I see we are going in the right direction. Let’s see what else we can do -
          </p>
          <p>
            Hmm, these “human notes” that I can see when I hover over the marks in the plot look interesting. It seems like you recorded any unusual characteristics of the penguin that you observed in the notes.  So youre saying that rows with notes about the same unusual mark means they are about the same penguin in different years? That’s gonna be useful!
          </p>
          <p>
            Alright, another specifical thing about my cousin is that he has a really short and deep bill that makes him stand out from others in our species. Let’s see if we can find the records about him. 
          </p>


          <div className="task-container">
            <h4>
              Task 2.1: Among the rows narrowed down from the last task, make a scatter plot of bill length and bill depth.
            </h4>
            <div className="img-container-front">
              <img src={penguin_bill_img} className="img-fluid img-front" />
            </div>
            <Row>
              <Editor projectId={projectsList[5]} hideDataImportButton={true} />
            </Row>
          </div>

          <div className="task-container">
            <h4>
              Task 2.2: In the scatter plot that you just made, find the records about the cousin.
            </h4>
            <ul>
              <li>
                Hint 1: Look at the shape of the data. Find the cluster of data (where a lot of dots seem to be close to each other) on the plot that represents a short and deep bill. 
              </li>
              <li>
                Hint 2: Note down the special notes in the “human notes” column. The rows with the same mark are records of the same penguin over different years. Again, you can hover your mouse over the data points on the graph to see details. 
              </li>
            </ul>
            <Row>
              <Editor projectId={projectsList[6]} hideDataImportButton={true} />
            </Row>
          </div>

          <p>
            That’s my cousin! We found him!! Wait, the records are only until 2020… Anyways, let’s see where he went. 
          </p>

          <div className="task-container">
            <h4>
              Task 2.3: Plot the location of the cousin on the map over the years. Find the island that the cousin was on in the year of 2020.
            </h4>
            <ul>
              <li>
              Hint 1: Plot the penguin location over the years on the map (with latitude and longitude columns). 
              </li>
              <li>
              Hint 2: Filter on 2020 to see the most recent location. 
              </li>
            </ul>
            <Row>
              <Editor projectId={projectsList[7]} microworld="maps" hideDataImportButton={true} />
            </Row>
          </div>

          <p>
            But it doesn’t make sense! This island is pretty far from the land and it will take a few hours for us to swim there from the land! My cousin doesn’t like to swim too far… If the data is not wrong, I’m curious why he showed up on this island in 2020? 
          </p>
          <p>--</p>

          <p>
            Ah-hah, you have another dataset on sea ice levels over the years! Maybe there are some hints?
          </p>
          <p>
            The following is a snapshot (i.e., first few rows) of the dataset:
          </p>
          <div className="img-container-front">
            <img src={data_snapshot_2} className="img-fluid img-front" />
          </div>
          
          <div className="task-container">
            <h4>
            Task 2.4: Use this new dataset on sea ice level to find a possible reason that the cousin was on a remote island in 2020.
            </h4>
            <ul>
              <li>
                Hint 1: Create bar plots of ice level over the years. Remember to filter for the island that the cousin was on. See the tutorial card if you are unsure about how to create a bar plot. 
              </li>
              <li>
                Hint 2: Consider the warming and cooling seasons differently. You may want to make a plot for the warming season and another for the cooling season, or use different colors for the two seasons. 
              </li>
            </ul>
            <Row>
              <Editor projectId={projectsList[8]} hideDataImportButton={true} />
            </Row>
          </div>

          <p>
            Alright, that’s possible. Looks like he found a great alternative to swimming. 
          </p>
          <p>
            And because of the low ice level in 2021, it is possible that he is still on the same island! 
          </p>
          <p>
            But it is a large island afterall - do we have some more information on where he might be on the island in 2021? 
          </p>
          <hr />
        </Col>
      </Row>


      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h2>
            Task 3: Finding the Cousin
          </h2>
          <p>
            Ah, you found the most recent dataset of the year of 2021! 
          </p>
          <p>
            The following is a snapshot (i.e., first few rows) of the dataset:
          </p>
          <div className="img-container-front">
            <img src={data_snapshot_3} className="img-fluid img-front" />
          </div>
          <p>
            Okay, looks like there are a couple of differences - let me see if I understand it correctly: basically you humans had a rough few years due to something called “COVID”. You humans had to stay inside so you wouldn’t get COVID, so you installed automatic penguin cameras on the islands.
          </p>
          <p>
            The camera records most of the penguin characteristics just as before. 
          </p>
          <p>
            Each island has multiple cameras; and the area covered by a camera is called a grid”. So, each island is divided into multiple grids. This is gonna be helpful! If I know which grid he is in, I can just go to that grid and find him!
          </p>
          <p>
            But the camera does not include any human notes - so no special mark for my cousin! What a pity! 
          </p>
          <p>
            Hmm, let me think. Remember I told you that my cousin has a short and deep bill - a really not so sharp bill. Among a big group of penguins, it is safe to say my cousin has the least sharp bill. Can we use this information?
          </p>

          <div className="task-container">
            <h4>
              Task 3.1:  Calculate the ratio of bill length and depth. Put this data into a new column named “bill sharpness”.
            </h4>
            <ul>
              <li>
                Hint 1: Add a new column using the “Add column” button on the right. 
              </li>
              <li>
                Hint 2: Use the operation blocks for calculation. . 
              </li>
            </ul>
            <Row>
              <Editor projectId={projectsList[9]} hideDataImportButton={true} />
            </Row>
          </div>
          
          <div className="task-container">
            <h4>
            Task 3.2:  Find the minimum bill sharpness on the island across all grids. The grid with the minimum bill sharpness is where the cousin is.
            </h4>
            <ul>
              <li>
                Hint 1: Filter the data for the island that we found out from the previous tasks. 
              </li>
              <li>
              Hint 2: Use the Groupby block and group on grids. 
              </li>
            </ul>
            <Row>
              <Editor projectId={projectsList[10]} hideDataImportButton={true} />
            </Row>
          </div>

          <p>
            Ah-ha! I now know where my cousin is! Thank you so much for your help. I’m off to meet him!
          </p>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 10, offset: 1 }}>
        <h2>
          Task 4: More Adventures with the Data!
        </h2>
        <div className="task-container">
          <p>
            That was quite a journey with the dataset! One powerful thing with data is that you can have multiple adventures with the same dataset!
          </p>
          <p>
            Now, think about what other questions you can ask about the dataset, use Dataland to answer those questions - choose your own adventures!
          </p>
            <Row>
              <Editor projectId={projectsList[11]} hideDataImportButton={true} />
            </Row>
          </div>
          <hr />
        </Col>
      </Row>

      
    </>
  );
}

export default Story;
