import React from "react";

import Row from "react-bootstrap/Row";
import Gui from "dataland-gui";

import "./Story.css";

function Story() {
  return (
    <>
      <Row>
        <h2>Act 0: A Traveling Penguin’s Tale</h2>
      </Row>

      <Row>
        <p>Hi there, the walking one—I mean, the human over there. Yes, I am talking to you. Is it so rare seeing a penguin talking? </p>
        <p>What am I doing? Oh, just fishing by the side of this boat. Something that a human recently told me about. But honestly, look at this rod and this string. It’s pretty, um, inefficient, isn’t it? </p>
        <p>And you humans have a whole set of categories to talk about different kinds of fish—do you even see how random that is? Fish don’t just live in your categories, people. But I’m complaining too much. As long as that helps with your very slow way of fishing, I guess it’s fine. </p>
        <p>I mean, I also can’t always blame your category stuffs anyways. One time, those stuffs kind of helped me searching for my cousin. I guess at the end they didn’t, but they did until maybe halfway… Come, let me tell you the story. </p>
        <p>Oh, and just sit by me, over there. This fishing stuff is gonna take some time.</p>
        <p>--</p>
      </Row>

      <Row>
        <p>You see, I am one who loves travelling the world, and I only go back to my land from time to time. There lives my cousin, and he always welcomes me back. </p>
        <p>I guess it was the year 2010, in you humans’ calendar. That year I went back to the land, and he wasn’t there. I asked our families, and no one knew where he had gone. They only told me that maybe he was gone before a huge snowstorm. Let me tell you, that’s not helping. </p>
        <p>I was so lost. I just couldn’t track him down the entire snow land. Well, that’s when you humans came in. Them someone told me that there was a group of you out there those days, following us everywhere, and one of you have been following my cousin. Look, I didn’t know what she wanted, and I didn’t judge her, but I thought you probably need to stop stalking us—I’m off my topic. </p>
        <p>So knowing that, I thought ok, at least that stalker, she could help me this time. So I figured where you humans were living. I think it’s called Palmer Station. I reached out to the humans there, and unsurprisingly, no one knew who my cousin was. Still, they offered to help. </p>
        <p>It also turned out that, fair enough, those humans were doing some scientific research for pretty noble reasons (I would prefer you just ask us, though). And then, they offered me one of your categorical stuffs—namely, datasets—and tools to help. So that’s when I got all of these things from them—</p>
        <p>--</p>
      </Row>

      <Row>
        <h3>Task 0.1: The traveling penguin is trying to understand what the dataset and the human tools are about. Help them out!</h3>
        <ul>
          <li>Look at the codebook and discuss what the columns are about. How do you think humans may have gathered data for each column? What impact do you think that data gathering process may produce? </li>
          <li>Import the dataset into the Dataland window below. Skim through the data rows. What are the names and scales of measurements humans use to describe penguins and islands? What does it mean to categorize and measure things this way? </li>
        </ul>
        <h3>Task 0.2: After figuring out that dataset, let’s also try out the data analysis tools.</h3>
        <ul>
          <li>Try out the Control blocks in Dataland.</li>
          <li>Try out the Operators.</li>
          <li>Try to make a new variable from data in the table.</li>
          <li>Try to add a new column, and fill it with processed data from a different column.</li>
        </ul>
      </Row>

      <Row>
        <div className='editor'>
          <Gui
            initialProjectTitle="Act 0"
            backend={false}
            microworld="plots"
          />
        </div>
      </Row>

      <Row>
        <p>--</p>
        <p>That was a long process, wasn’t it? That was the first time I’ve ever seen those human tools, and they looked pretty wild. They still look wild to me now. I would really love to tell you how those tools helped, but just let me doze off for a moment. This fishing thing is making me quite… sleepy…</p>
        <p>(End of Act 0)</p>
      </Row>

      <Row>
        <h2>Act 1: Big Backpack and Flat Bill</h2>
      </Row>

      <Row>
        <p>I’m glad you’re still here with me, human. You humans’ fishing thing is going really slow. I would rather just jump down from here and catch ten times more fish in a blink, and then come back up to take a nap with my stomach full. You sure need to endure some hunger to enjoy this. </p>
        <p>Where was I in my story? Oh, right. I was in Palmer Station with the stalkers—ok, researchers—and one of them must have been following my cousin all around the place. None of them wanted to admit, or maybe they really couldn’t tell us penguins apart. Whatever reason, I got their records—that dataset, and later they have dug out some more records from their boxes. With those, I started to figure out who that human was, and also which parts of the records were about my cousin. </p>
        <p>--</p>
      </Row>

      <Row>
        <h3>Task 1.1: The traveling penguin recalls that their families mentioned a human who always carries a big backpack. They also figured out that those humans at Palmer Station called their family Adelie. Use this information to find the human’s ID in the dataset. </h3>
        <ul>
          <li>Filter through the humans and see who matches the characteristics.</li>
          <li>Group and see which human gathers the maximum number of data rows within the right species. This human is the one we’re looking for.</li>
        </ul>
      </Row>

      <Row>
        <div className='editor'>
          <Gui
            initialProjectTitle="Act 1 - Task 1.1"
            backend={false}
            microworld="plots"
          />
        </div>
      </Row>

      <Row>
        <p>--</p>
        <p>“Aha! So you were the one stalking my cousin, weren’t you? And you were always carrying around a big backpack.” I said.</p>
        <p>“I’m so sorry, my friend. We were just carrying out our research, and we didn’t know you could talk like this. And, that backpack was for specialized devices.” She said. </p>
        <p>“Yeah, just talk with us next time. You humans never really talked with us and that’s why we didn’t talk back.” I said. </p>
        <p>“But we tried to ask. All we got were answers to some really basic questions.”</p>
        <p>“Then you probably didn’t ask it right. I’ll teach you when we have time. Now, which ones are the data you made about my cousin?” </p>
        <p>“Um… honestly, I can’t tell.”</p>
        <p>“What?”</p>
        <p>--</p>
      </Row>

      <Row>
        <h3>Task 1.2: The researcher has gathered too many data rows. Now she can’t remember which data rows are about the missing cousin. We need to find the correct rows. </h3>
        <h3>Additionally, the traveling penguin says their cousin is, of course, also an Adelie penguin, and he weighs about [xx] grams, has a [flat] bill and [long] flippers.</h3>
        <ul>
          <li>Within the data gathered by this human, plot out the body characteristics of the penguins, see how data cluster, and find the cluster that corresponds to the missing cousin.</li>
        </ul>
      </Row>

      <Row>
        <div className='editor'>
          <Gui
            initialProjectTitle="Act 1 - Task 1.2"
            backend={false}
            microworld="plots"
          />
        </div>
      </Row>

      <Row>
        <p>--</p>
        <p>“Ahh, I remember that penguin now.” She said.</p>
        <p>“Thank you human. I think I’ve already found him though.” I said.</p>
        <p>“No no no, I mean, that bill! I totally remember him now! Check my notes, I should have marked him every time I saw him.” </p>
        <p>“Well, alright.”</p>
        <p>--</p>
      </Row>

      <Row>
        <h3>Task 1.3: The human recalls that she has been marking the cousin’s data with some special mark. </h3>
        <ul>
          <li>Filter out the data rows for the missing cousin and check the Human Notes column: they should all bear the same special mark. </li>
        </ul>
      </Row>

      <Row>
        <div className='editor'>
          <Gui
            initialProjectTitle="Act 1 - Task 1.3"
            backend={false}
            microworld="plots"
          />
        </div>
      </Row>

      <Row>
        <p>--</p>
        <p>So, that was how I found the records of my cousin. I still didn’t know if those records were gonna help, but it started to become interesting. For a while, I even forgot that my cousin might have been lost in the snowstorm. Ah, the guilty pleasure of playing detective. From there I started to trace my cousin, and then… Whoa! Finally! A fish on the hook! Come, human, help me out, my hands are not designed for this—</p>
        <p>(End of Act 1)</p>
      </Row>

      <Row>
        <h2>Act 2: Where and When</h2>
      </Row>

      <Row>
        <p>We got a big fish, human, and I’m not surprised that the fishing rod couldn’t hold. This starts to remind me of a novel that one of your kind wrote, the novel where someone caught a big fish in the middle of the ocean and lost it. It’s pretty romantic, isn’t it?</p>
        <p>But seriously, your fishing thing works so bad and now I need to get my fur dry—and you’d better dry that shaggy pocket that you put on your body, too. You humans just don’t know how to deal with the sea, do you? </p>
        <p>Now that we need to dry ourselves on the deck, why don’t we go back to my story? I was there with the big backpack researcher, and we figured out which data belonged to my cousin. You thought then we could just track him down, don’t you? Well, we realized that that researcher was stalking my cousin for her own project, and she didn’t keep the locations and times because she wasn’t really interested in those. </p>
        <p>Luckily, we had some extra things to help. The human researchers did ask the penguins what names they would use to call different lands and places, and the humans recorded those names as “Penguin Grids”. To say the truth, we don’t really think of places in grids, but that seems to be a metaphor that works for you. </p>
        <p>And those grid names helped me as well, because the big backpack one also recorded those names, and we could figure out which names were for which places, and roughly figure out where my cousin was going. </p>
        <p>--</p>
      </Row>

      <Row>
        <h3>Task 2.1: Use Penguin Grid Names to find out rough locations of the missing cousin. </h3>
        <ul>
          <li>Plot out data rows on the map, and color the data marks by Penguin Grid Names. Compare the distribution of these and figure out how names and geographic features match.</li>
          <li>Calculate average longitudes and latitudes for each Penguin Grid Name.</li>
          <li>Fill in average longitudes and latitudes for the missing cousin’s locations, and plot the missing cousin’s locations onto the map.</li>
        </ul>
      </Row>

      <Row>
        <div className='editor'>
          <Gui
            initialProjectTitle="Act 2 - Task 2.1"
            backend={false}
            microworld="maps"
          />
        </div>
      </Row>

      <Row>
        <p>--</p>
        <p>So that was the locations, we got them. Then it came to times—I know this is getting technical, but stay with me. </p>
        <p>From the records, we only knew the “years” according to your human calendars, but that was too rough. We couldn’t figure out where he was heading towards or which records were his last locations if we didn’t have more precise times. </p>
        <p>That’s when we had a bit more luck: that “specialized device” in the researcher’s backpack was part of their project measuring sea ice levels, and that device somehow snuggled sea ice level measurements and warming and cooling seasons into the dataset. </p>
        <p>You are wondering how that’s useful, right? I have to say, on that part, the researcher surely outsmarted us both! It was a simple logic: she just assumed that the sea ice level always fell during the warming season, and always rose during the cooling season. That way, she only needed to map the sea ice levels on my cousin’s records between the minimum and maximum sea ice levels of each year, and Voila! We knew the order of these records!</p>
        <p>Did that go too fast? Eh, I guess you have to draw it out yourself. Do you have paper and pencil? Oh, is everything soaked already? Duh. Let’s just use water to draw on the wood planks over there—</p>
        <p>--</p>
      </Row>

      <Row>
        <h3></h3>
        <ul>
          <li>Find the min and max Sea Ice Level values of each year, and store them in variables.</li>
          <li>Create a new column for granular time by interpolating between min and max values of each year. 
            <ul>
              <li>When in doubt, you could use these formulae:</li>
              <li>If in warming season: 
                <ul>
                  <li>Time Interpolation = 0.5 * (Sea Ice Level – Min Level)/(Max Level – Min Level)</li>
                </ul>
              </li>              
              <li>If in cooling season: 
                <ul>
                  <li>Time Interpolation = 0.5 + 0.5 * (Sea Ice Level – Max Level)/(Min Level – Max Level)</li>
                </ul>
              </li>
              <li>Remember that you need to calculate this for each year separately, so filter the data by year before you start calculating! </li>
              <li>When you get all the interpolated values (they should all be between 0.0 and 1.0), create a new column to add these fractional values to the Year (2007, 2008, or 2009).</li>
            </ul>
          </li>
        </ul>
      </Row>

      <Row>
        <div className='editor'>
          <Gui
            initialProjectTitle="Act 2 - Task 2.2"
            backend={false}
            microworld="maps"
          />
        </div>
      </Row>

      <Row>
        <p>--</p>
        <p>See how that worked? No? I know it’s a lot, human. That researcher was smart to come up with this plan. That way we knew how my cousin was moving over time, and the only thing left was to figure out where he was trying to go. </p>
        <p>For that, if you don’t mind, let’s get into the cabin and talk about it. The wind is getting cold up here on the deck, and I don’t want to catch cold with wet furs. </p>
        <p>(End of Act 2)</p>
      </Row>


      <Row>
        <h2>Act 3: Finding Cousin</h2>
      </Row>

      <Row>
        <p>It surely is cozy down here. I think we’re gonna have a windy sail tonight. I hope the heaters on this ship keep up, or we’ll be frozen by sunrise… Oh, thank you human, how nice of you. Warm drinks are the best. Now, if you don’t mind me adding a sardine in there…</p>
        <p>Ah, the warmth is making me sleepy. But I guess we should stay awake until we dry ourselves. Let me get back to my story. Where were we? Right, we were trying to figure out where my cousin wanted to go. </p>
        <p>He is a mysterious one, I tell you. Even I can’t always tell what he’s planning on, so I totally doubted if the records could help. But the researcher, she was totally confident in her data. I totally need to give her a lesson on no stalking policy, though.</p>
        <p>--</p>
      </Row>


      <Row>
        <h3>Task 3.1: The traveling penguin now wants to figure out what their cousin was up to. Use the results from last task to see if there’s a pattern.</h3>
        <ul>
          <li>Do you see a pattern on the missing cousin’s movement?</li>
          <li>Why do you think he moved like that?</li>
        </ul>
      </Row>

      <Row>
        <div className='editor'>
          <Gui
            initialProjectTitle="Act 3 - Task 3.1"
            backend={false}
            microworld="maps"
          />
        </div>
      </Row>

      <Row>
        <p>--</p>
        <p>“What do you think?” She asked. I think she was waiting for a positive answer, but—</p>
        <p>“Human, I really can’t tell. He is such a mysterious penguin.” I said.</p>
        <p>We both sighed and sat there for a while.</p>
        <p>“My friend,” she said, “I’m not sure if this is helpful or if it’s gonna make things even worse, but I figured out a few other cases where my fellows were tracking individual penguins, and I asked them to go talk to the penguins they tracked.”</p>
        <p>“I appreciate that, human. And I’m glad you listened to my lessons on how to talk with penguins.”</p>        
        <p>“Shall we take a look at these stories?”</p>
        <p>“I don’t know if these are gonna help but… why not?”</p>
        <p>And so we read through them. Each of these stories is as long as the one I’m telling you right now, so I won’t bother telling you all of them, but in the end—</p>
        <p>“Yeah, these don’t look really good.” I said. “It’s fine, human. I knew several of us have gone far and tried to explore the ocean, and ended up lost in storms or at sea. This is not news to me. Plus, my families also said my cousin was probably lost in the storm. I won’t be surprised if he indeed was.”</p>
        <p>The researcher sat in silence, looking sad for a while, but eventually she stood up. </p>        
        <p>“But I don’t want to just give up.” She said.</p>
        <p>“Well, you’re stronger than I expected. Got any plans?”</p>
        <p>“Yes, let’s at least try one more thing.”</p>
        <p>--</p>
      </Row>

      <Row>
        <h3>Task 3.2: The researcher doesn’t want to give up and suggest we try one last thing: figuring out if there was a strong indicator of snowstorms around the time. </h3>
        <ul>
          <li>Update to dataset: a new column “Recorded Snowstorm around the Time” is now added. It’s a binary column showing if there has been a recorded snowstorm around the estimated time of the year. </li>
          <li>Using the new column, try to predict what kinds of data record most possibly indicate snowstorms, and decide how likely it is that the missing cousin was caught in a snowstorm. </li>
        </ul>
      </Row>

      <Row>
        <div className='editor'>
          <Gui
            initialProjectTitle="Act 3 - Task 3.2"
            backend={false}
            microworld="maps"
          />
        </div>
      </Row>

      <Row>
        <p>--</p>
        <p>I don’t know what I can tell you, human. Honestly, those possibility numbers didn’t mean much to me, but in our version of the model, things surely looked bad. At the end, I thought we were stuck. It was late in the night, and both of us were exhausted. People have tried to search the place where my cousin last appeared, and nothing was found. I was making up my mind to accept that he was lost forever. </p>
        <p>And that’s when the airmails arrived at the Palmer Station. In there, humans found a curious postcard from, I think you called that place Falkland Islands. And guess what? My cousin made his bill print on the postcard! He has left the snow lands and gone that far, and till today I still have no idea how he did that. The researcher would say let’s pull up the ship schedules and see if he caught a ship just like I do. I would say thanks but I’m too tired to go through your records once more. But we did it anyways—we compared the size of the bill print with the records, and they surely matched. </p>
        <p>So, that’s my story, human. I’m glad you’ve stayed this far, and I’m sorry it’s kind of anti-climax. The researcher said data analyses could end up with not so exciting or even confusing results. I guess it’s just like the slow fishing thing you humans do. Maybe you are aiming at a big fish, but maybe your rod breaks. Or maybe you’ll eventually make a smaller catch, and I guess you should still feel proud of it. After all it’s part of the stories we all tell, of ourselves, of things and fellows around us. Well, at least I am satisfied at the end. </p>
        <p>Now, since my furs are dry, and so is your shaggy pocket, I suggest we both take a nap, and keep it warm through this windy night. The warm air from heaters is so nice, and I bet tomorrow we will see a brilliant sunrise… Did that rhyme? O, me, a traveling penguin poet… </p>
        <p>(THE END)</p>
      </Row>

    </>
  );
}


export default Story;