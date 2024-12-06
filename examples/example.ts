import { Stagehand } from "../lib";
import { z } from "zod";

async function example() {
  const stagehand = new Stagehand({
    env: "LOCAL",
    verbose: 1,
    debugDom: true,
    enableCaching: false,
    modelName: "claude-3-5-sonnet-latest",
  });

  await stagehand.init({ domSettleTimeoutMs: 3000 });
  await stagehand.page.goto("https://www.mycmh.org/locations/");

  const result = await stagehand.extract({
    instruction:
      "extract a list of the health centers on this page with their name, phone number and full address",
    schema: z.object({
      health_centers: z.array(
        z.object({
          name: z.string(),
          phone_number: z.string(),
          address: z.string(),
        }),
      ),
    }),
  });

  console.log(
    `The healthcare centers are ${JSON.stringify(result.health_centers, null, 2)}`,
  );
}

async function rostr() {
  const stagehand = new Stagehand({
    env: "LOCAL",
    verbose: 1,
    debugDom: true,
    enableCaching: false,
    modelName: "claude-3-5-sonnet-latest",
  });

  await stagehand.init({ domSettleTimeoutMs: 3000 });
  // await stagehand.page.goto(
  //   "https://ecommerce-playground.lambdatest.io/index.php?route=common/home",
  // );

  // await stagehand.act({ action: "hover on 'My account'", useVision: false });
  // await stagehand.act({ action: "click the Login link", useVision: false });
  // await stagehand.act({
  //   action: "Fill E-Mail Address with 'benjaminrigby@gmail.com'",
  //   useVision: false,
  // });
  // await stagehand.act({
  //   action: 'Password with "tzw@mfp3hjy7rzd!DJB"',
  //   useVision: false,
  // });
  // await stagehand.act({ action: "click Login button", useVision: false });
  // await stagehand.act({ action: 'hover on "Mega Menu"', useVision: false });
  // await stagehand.act({ action: "click Headphones link", useVision: false });
  // await stagehand.act({
  //   action: "set max price is 500 for Price filter on the left sidebar",
  //   useVision: false,
  // });
  // await stagehand.act({
  //   action: 'click "Apple" in "Manufacturer"  to filter ',
  //   useVision: false,
  // });
  // await stagehand.act({
  //   action: 'check the checkbox "Mice and Trackballs" in "Sub Category"',
  //   useVision: false,
  // });
  // await await stagehand.page.waitForTimeout(3000);
  // await stagehand.act({
  //   action: "hover on first product from filtered results",
  //   useVision: false,
  // });
  // await stagehand.act({ action: "click Add to cart button", useVision: false });

  // ------------------ROSTR.CC
  await stagehand.page.goto("https://www.rostr.cc/sign-in");
  await stagehand.act({
    action: "fill email with rc@imprintedgroup.com",
    useVision: false,
  });
  await stagehand.act({
    action: "fill password with Boyfriend69.com",
    useVision: false,
  });
  await stagehand.act({ action: "click Sign In button", useVision: false });
  await stagehand.page.goto("https://www.rostr.cc/advanced-search");
  await stagehand.act({
    action:
      'fill "NMF - No Label (4/19/24)" in "Filter Artists by Tag" and select it from the dropdown',
    useVision: false,
  });
  await stagehand.act({
    action:
      'fill "Sugar Pine \'23" in "Filter Artists by Tag" and select it from the dropdown',
    useVision: false,
  });
  // await stagehand.extract({ instruction: "extract all visible pages", schema: z.object({}) });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  // await stagehand.act({ action: "", useVision: false });
  console.log("================ Done ================");

  // const result = await stagehand.extract({
  //   instruction:
  //     "extract a list of the health centers on this page with their name, phone number and full address",
  //   schema: z.object({
  //     health_centers: z.array(
  //       z.object({
  //         name: z.string(),
  //         phone_number: z.string(),
  //         address: z.string(),
  //       })
  //     ),
  //   }),
  // });

  // console.log(`The healthcare centers are ${JSON.stringify(result.health_centers, null, 2)}`);
}

(async () => {
  await rostr();
})();
