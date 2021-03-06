import React from "react";
import "../css/ResultScreen.css";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import Collapsible from "react-collapsible";

const ResultsScreen = (props) => {
  return (
    <>
      <h2 style={{ textTransform: "capitalize" }} className="nameTitle">
        {props.name}
        <Typewriter
          stopBlinkinOnComplete="true"
          string="'s Routine Builder results."
        />
      </h2>
      <p className="intro">
        The order you layer your skincare products is important. The wrong order
        can lead to either pilling (where your products don't absorb and roll up
        into little gritty balls), or the products become ineffective becasue
        they're not being used as intended or absorbed by the skin correctly.
        Follow this custom routine built just for you to layer your products
        correctly and have the perfect routine for your needs. The Routine
        Builder gives you your ideal AM (morning) and PM (night-time) routine.
        As well as products that aren't <i>necessary</i> but complementary in
        the Optional box. These products can also aid in meeting your skincare
        goals so be use to check them out.
      </p>
      <div className="resultDivs">
        <div className="AMWrapper">
          <h1>
            AM routine
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-brightness-high-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
              <path
                fillRule="evenodd"
                d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
              />
            </svg>
          </h1>

          <Collapsible trigger=" 1. Cleanser >">
            <p>
              This is the first step in your AM routine. It removes any
              grime/dirt gathered in your sleep. This is also the pefect time to
              remind you to change your pillow cases weekly!
            </p>
            <p>"Cleanser.imageLinks.img1"</p>
            <p>"Cleanser.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 2. Toner / Essence >">
            <p>
              Toner's and Essence's are great for adding hydratingback into skin
              after cleansing, as well as removing any bits of dirt or residue
              your cleanser didn't catch. You can apply this with your hands and
              pat it into skin, or use a cotton pad and swipe.
            </p>
            <p>"Toner.imageLinks.img1"</p>
            <p>"Toner.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 3. Serum >">
            <p>
              Serums address targeted concerns. They are best applied on damp
              skin after your toner, or you can spritz your face with a mist
              (found in the optional section) then apply the serum. Pat, don't
              rub!
            </p>
            <p>"Serum.imageLinks.img1"</p>
            <p>"Serum.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 4. Moisturiser >">
            <p>
              All skin types need a moisturiser. Don't skin this step, it helps
              lock in all the goodness applied above and keeps your skin
              hydrated throughout the day. Apply to damp skin.
            </p>
            <p>"Moisturiser.imageLinks.img1"</p>
            <p>"Moisturiser.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 5. SPF >">
            <p>
              It's a myth that black and brown people don't need SPF. Everyone
              needs SPF. Argue with yourself, but wear SPF. All of the SPF's
              recommended on Glow Station do not leave a white cast, we wouldn't
              do that you. We're trying to glow, not look like Casper the
              friendly ghost.
            </p>
            <p>"SPF.imageLinks.img1"</p>
            <p>"SPF.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
        </div>
        <div className="PMWrapper">
          <h1>
            PM routine{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-moon"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
              />
            </svg>
          </h1>
          <Collapsible trigger=" 1. Cleanser >">
            <p>
              Technically, at night you should double cleanser with an oil or
              balm cleanser first to breakdown any makeup or SPF, or just
              general grime, because oil disolves oil - but we'll keep it
              simple. Washing your face at night is so important to healthy skin
              and not getting a build up of dirt. Be sure to wash your face or
              at least 60 seconds, no less!
            </p>
            <p>"Cleanser.imageLinks.img1"</p>
            <p>"Cleanser.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 2. Toner / Essence >">
            <p>Same as the AM routine, adds hydration and removes residue.</p>
            <p>"Toner.imageLinks.img1"</p>
            <p>"Toner.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 3. Exfoliator >">
            <p>
              The best step. Exfoliating is vital to getting rid of all the
              nasties beneath the surface of your skin, it speeds up cell
              turn-over (like shedding dead skin) and will have you glowing in
              no time. If you are new to exfoliating, start 2-3x a week, and
              gradually increase. After exfolating, mist your face (optional) to
              reset your skin's PH.{" "}
            </p>
            <p>"Exfoliator.imageLinks.img1"</p>
            <p>"Exfoliator.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 4. Serum >">
            <p>
              Same as the AM routine, addresses concerns. Apply on damp skin as
              damp skin is more permeable!
            </p>
            <p>"Serum.imageLinks.img1"</p>
            <p>"Serum.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" 5. Moisturiser >">
            <p>
              Same as the AM routine, Alongside a night-time oil (optional) this
              helps lock in all the goodness and keep your skin hydrated. Apply
              to damp skin.
            </p>
            <p>"Moisturiser.imageLinks.img1"</p>
            <p>"Moisturiser.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
        </div>
        <div className="optionalWrapper">
          <h1>
            Optional Products{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-gem"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785l-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004l.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495l5.062-.005L8 13.366 5.47 5.495zm-1.371-.999l-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l2.92-.003 2.193 6.82L1.5 5.5zm7.889 6.817l2.194-6.828 2.929-.003-5.123 6.831z"
              />
            </svg>
          </h1>
          <Collapsible trigger=" Oil >">
            <p>
              Oils act as occlusives, sealing everything in. Use them in your PM
              routine after your moisturiser for a face that feels and looks
              like silk.
            </p>
            <p>"Oil.imageLinks.img1"</p>
            <p>"Oil.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" Mist >">
            <p>
              Msit Mist Mist! Misting is a great step in both your AM and PM
              routine. Everything (apart from exfoliatiors and oils) is applied
              better to damp skin. Ideally you should: Cleanse, tone, exfoliate,
              mist, serum, mist, moisturiser, oil. You always want a hydrating
              mist (and toner / essence), not an exfoliating one.
            </p>
            <p>"Mist.imageLinks.img1"</p>
            <p>"Mist.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
          <Collapsible trigger=" Mask >">
            <p>
              Masking is nice for some me-time, some pamper-time, but they're
              not necessary. If you do choose to mask, use 2-3x a week after
              cleansing. After removal, follow with toner and the rest of your
              routine.
            </p>
            <p>"Mask.imageLinks.img1"</p>
            <p>"Mask.name"</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </Collapsible>
        </div>
      </div>
    </>
  );
};

export default ResultsScreen;
