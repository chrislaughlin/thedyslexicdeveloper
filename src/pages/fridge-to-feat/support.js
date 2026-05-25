import React from "react"

import FridgeToFeatPage from "../../components/fridgeToFeatPage"

const SupportPage = ({ location }) => (
  <FridgeToFeatPage
    location={location}
    title="Support"
    description="Support for Fridge to Feat, the iOS app that turns fridge ingredients into meal ideas."
    intro="Need a hand with a scan, meal ideas, or credits? Here is how to get help with Fridge to Feat."
  >
    <h2>How Fridge to Feat Works</h2>
    <p>
      Fridge to Feat lets you take or choose photos of your fridge, check the
      ingredients it identifies, and use credits to generate three meal ideas
      from what you already have.
    </p>

    <h2>Common Questions</h2>
    <h3>Why did the app miss an ingredient?</h3>
    <p>
      Lighting, labels, containers, and hidden items can affect detection. You
      can add missing ingredients or remove incorrect ones before creating meal
      ideas.
    </p>

    <h3>Why can I not generate meal ideas?</h3>
    <p>
      Confirm that your ingredient list contains at least one item and that you
      have enough credits. An internet connection is required for ingredient
      detection, meal generation, and purchase verification.
    </p>

    <h3>I purchased credits but do not see them.</h3>
    <p>
      Reopen the app while connected to the internet so it can sync your credit
      balance. If the problem continues, include the approximate purchase date
      when contacting support. Do not send payment details or photos of your
      fridge.
    </p>

    <h2>Contact Support</h2>
    <p>
      For support or privacy questions, contact Chris Laughlin through the
      developer's <a href="https://github.com/chrislaughlin">GitHub profile</a>.
      Please include the app name, your iOS version, and a short description of
      the issue.
    </p>
  </FridgeToFeatPage>
)

export default SupportPage
