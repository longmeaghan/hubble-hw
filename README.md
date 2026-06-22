# Hubble Network — Project Assignment

## Try the prototype
Clone it, run npm install and npm run dev, and the prototype will spin up locally.
* **What's wired up**: the dashboard page and the full Visualize Your Fleet flow.
* **What's not**: the other Get Started options (connect a device, take it to production) are surfaced but not functional.
* **To restart**: refresh the page.

## Design something new: A Get Started plan with Visualize Your Fleet
A first-session dashboard structure for developers new to Hubble Network. It gives them an opportunity to understand the product, connect their first device, and move toward production. For this exercise, I focused on Visualize Your Fleet to address the product gap of visualizing device and network data without needing a device.

### Problem
Hubble's stated goal is one billion users, but the first-session experience tells a much smaller story. The dashboard is designed around one device at a time, which reinforces exactly the “Find My iPhone” mental model the team flagged in my interview as a limitation when explaining the product to enterprise customers. After the single-device setup process, the dashboard dead-ends, leaving a developer evaluating Hubble with no way to see the product at the scale they're considering. And if someone arrives without a device on hand, there's effectively nothing they can do.

The Get Started experience should accommodate developers in different states: understanding the product, connecting a device, or moving toward production. Visualize Your Fleet is the new path I’m proposing for developers as part of the first state. It does double work: by leading with use cases and fleet-scale examples, it 1) expands how every developer thinks about what Hubble is for, 2) shifts the mental model needed to reach a billion devices, not just a million one-offs.

The question I framed for myself was: what would a Get Started experience look like if it accommodated the different states developers arrive in and gave each of them a meaningful next step in their first session? For this project, I focused on how the Get Started structure could work and how a user could visualize connected devices without setting one up.

### How it works
The Get Started section surfaces three parallel options: understand the product, connect a device, take it to production. Visualize Your Fleet is a new "understand the product" path and does not require a developer to have a device. My prototype focuses on that path:

1. Designated Get Started section at the top of the dashboard: The first thing a developer sees on landing, replacing the current dead-end.
2. One-click defaults or custom setup: The user can get going immediately by picking a pre-defined use case. Or define their own through 3 simple questions (use case, how many devices, region).
3. Simulated fleet-scale dashboard: A populated view of devices is available without any device required.


### One design decision trade-off
I chose to make the simulated preview available up front because the problem we’re solving lives in the evaluation phase, before someone commits to setup. Waiting until after the single-device setup is too late to expand what a developer thinks Hubble is for. The trade-off is that simulated data is by definition not their data, so the preview risks feeling like a marketing demo rather than a credible product surface. How realistic the data needs to be, how clearly it stays labeled as simulated, and where the hand-off to real device data eventually happens are conversations I'd want to have with the broader team.

### Process and Tools
* Process: Rapid competitive analysis → persona segmentation → business impact framing → concept generation → adversarial critique through Claude.
* What I threw out: a natural-language AI prompt (too lossy and ephemeral), and a chat interface (slower than tapping for multiple-choice).
* What I kept: use-case selection (one-click defaults + custom option) and the simulated fleet-scale dashboard.
* Why AI stays out of the flow: The point of Visualize Your Fleet is to get a developer to simulated data in one or two clicks. AI inserted between the user and that data would just be a gatekeeper. I'm bullish on AI for automating workflows, and that's a conversation I'd be excited to have with the team, but here, speed with simplicity beats AI personalization. The exception worth revisiting: if Hubble has account-level signal beyond a business email address that could meaningfully shape the simulation, AI could earn a place there.
* Prototype build: Quick wireframe sketches were an independent first pass. From there, I quickly scraped Hubble’s website into a markdown design system (design.md) and assembled the prototype from that, portal screenshots, and the wireframes. No Figma, only Cursor. Fast to put together, though the design.md had limits (gradient buttons and data visualization, for instance, didn't carry over).

### With more time
* Run user research and review existing data to understand where developers drop off on the path to production. That's the funnel the Get Started experience should be optimized against.
* Work with engineering and product to firm up the use cases. Which templates best represent Hubble's strongest fit, and which should be deferred.
* Build out the "connect a device" and "take it to production" paths with the same care as the View Your Fleet.
* Track which of the three Get Started options developers use most. Use that data point, along with other research, to refine the onboarding experience.
* Define when onboarding ends and the Get Started section comes off the dashboard. After a usage threshold? Or stay as a persistent reference?
* Better understand the language Hubble and its users actually use. I worked from terminology I picked up via AWS IoT, which doesn't all transfer — some of it likely mismatches both how Hubble talks about its product and how developers describe what they're trying to build.

