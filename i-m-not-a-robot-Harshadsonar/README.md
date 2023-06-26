 # I'm not a robot
 
 You want to verify that the user of your app is a human and not a robot. 
 Acceptance Criteria:-
 <ul>
 <li>Render 6 images out of which 5 are different and 1 is copy of one from the previous 5.</li>
 <li>Randomly arrange all 6 images every time the page reloads.</li>
 <li>Every time choose a random image to repeat.</li>
 <li>Render a h3 tag with text <code>Please click on the identical tiles to verify that you are not a robot</code></li>
 <li>On one or more clicks on images, <code>Reset</code> button should appear with id=""reset"" and should disappear when it is clicked (i.e., after state is reset to initial state).</li>
 <li>Image tags should have data-ns-test attribute with values img1, img2, img3, img4 and img5. One of them should repeat as one image repeats. That means, identical images should have identical value for data-ns-test attribute</li>
 <li>When two images are clicked, a verify button should appear which will be used to verify the user. It should have innerHTML <code>Verify</code> and id=""btn"". Even for more than 2 clicks, the verify button should not be rendered.</li>
 <li>When two images are selected and both the images are identical, then render a p tag with id=""para"", containing the text <code>You are a human. Congratulations!</code>. If the images clicked are different then render a p tag with id=""para"", containing the text <code>We can't verify you as a human. You selected the non-identical tiles.</code></li>
 <li>Please ensure that double clicking the same image does not render the verify button.</li>
 <li>Use click event to govern the image selection.</li>
 </ul>
 Please use images that are <10kb
 There are 3 states:
 <ul>
 <li>State 1: When user has not clicked the tiles. 
 In this case a message should show- <code>Please click on the identical tiles to verify that you are not a robot</code> and no Verify button or Reset button should show because no tiles have been clicked.</li>
 <li>State 2: When user has clicked at least one tile.
 In this case Reset button should show. Clicking on this button takes you to State 1</li>
 <li>State 3: When user has clicked both the tiles.
 In this case Verify button should also show.</li>
 <li>State 4: When the Verify button is clicked.</li>
 In this case, Verify button should disappear and <strong>You are a human. Congratulations!</strong> or <strong>We can't verify you as a human. You selected the non-identical tiles.</strong> message should come up depending on whether the tiles clicked were identical or not.</li>
 </ul>
