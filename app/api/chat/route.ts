// export async function POST(request: Request) {
//     const message = await request.text();
//     let prompt = `You are a PhishingBot for a Phishing and Transquatter Website. Generate a list of 5 website links that replace the domain of this example link with similar domains: ${message}. Return JSON response with the list of 5 links in the following format: ["link1", "link2", "link3", "link4", "link5"]`;

//     function strip(string: string) {
//         return string.replace(/^\s+|\s+$/g, "");
//     }

//     try {
//         const apiKey = process.env.OPENAI_API_KEY;
//         const response = await fetch(
//             "https://api.openai.com/v1/engines/text-davinci-003/completions",
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${apiKey}`,
//                 },
//                 body: JSON.stringify({
//                     prompt: prompt,
//                     max_tokens: 512,
//                 }),
//             }
//         );

//         if (!response.ok) {
//             throw new Error(
//                 `OpenAI API request failed with status ${response.status}`
//             );
//         }

//         const data = await response.json();
//         const generatedText = data.choices[0].text;
//         console.log(generatedText);

//         return new Response(generatedText, {
//             status: 200,
//             headers: { "Content-Type": "text/plain" },
//         });
//     } catch (error) {
//         console.error("Error:", error);
//         return new Response("Error occurred", { status: 500 });
//     }
// }
