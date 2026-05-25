import React from "react"

import FridgeToFeatPage from "../../components/fridgeToFeatPage"

const PrivacyPage = ({ location }) => (
  <FridgeToFeatPage
    location={location}
    title="Privacy Policy"
    description="Privacy Policy for the Fridge to Feat iOS app."
    intro="This policy explains what Fridge to Feat processes when you turn fridge photos into meal ideas."
  >
    <p>
      <strong>Effective date:</strong> 25 May 2026
    </p>

    <h2>Overview</h2>
    <p>
      Fridge to Feat is an iOS app by Chris Laughlin. The app uses your photos
      and ingredient selections to generate meal inspiration. It does not sell
      your personal information or use your app content for advertising.
    </p>

    <h2>Information Processed</h2>
    <ul>
      <li>
        <strong>Fridge photos:</strong> Photos you capture or select are
        processed to identify visible ingredients.
      </li>
      <li>
        <strong>Ingredient and meal content:</strong> Detected or manually
        entered ingredients are processed to generate meal ideas, including
        cooking steps.
      </li>
      <li>
        <strong>Credit and purchase information:</strong> The app processes an
        anonymous account identifier, credit balance, and purchase verification
        information needed to provide purchased credits.
      </li>
    </ul>

    <h2>How Information Is Used</h2>
    <ul>
      <li>To detect ingredients from the photos you submit.</li>
      <li>To generate meal ideas at your request.</li>
      <li>To maintain and sync your credit balance.</li>
      <li>To verify in-app purchases and provide purchased credits.</li>
      <li>To diagnose problems when you contact support.</li>
    </ul>

    <h2>Storage And Sharing</h2>
    <p>
      Your saved photos, ingredient history, and generated meals are stored on
      your device using Apple's local app storage. They are not stored in a
      Fridge to Feat cloud account.
    </p>
    <p>
      When you ask the app to scan photos or create meal ideas, the required
      photos or ingredient text are sent to OpenRouter and its selected AI model
      provider to return the requested result. Do not submit photos containing
      people or other sensitive information.
    </p>
    <p>
      Fridge to Feat uses Supabase to create an anonymous session and maintain
      credit balances. Purchase verification information may be sent to Supabase
      to validate credits purchased through Apple's in-app purchase system.
      Apple processes payments under its own privacy practices.
    </p>

    <h2>Your Choices</h2>
    <ul>
      <li>
        Camera or photo library access only occurs when you choose to capture or
        select a photo, subject to iOS permissions.
      </li>
      <li>
        You can avoid photo processing by not using the fridge scanning feature.
      </li>
      <li>
        Removing the app deletes content stored locally by the app from your
        device. Contact support with questions about credit account data.
      </li>
    </ul>

    <h2>Children</h2>
    <p>
      Fridge to Feat is not directed to children under 13 and does not knowingly
      collect personal information from children.
    </p>

    <h2>Policy Updates</h2>
    <p>
      This policy may change as the app develops. Updates will be published on
      this page with a revised effective date.
    </p>

    <h2>Contact</h2>
    <p>
      For privacy questions or support requests, contact Chris Laughlin through
      the developer's{" "}
      <a href="https://github.com/chrislaughlin">GitHub profile</a>.
    </p>
  </FridgeToFeatPage>
)

export default PrivacyPage
