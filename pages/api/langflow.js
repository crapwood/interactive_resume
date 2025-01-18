// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        const payload = await req.body;
        const token = process.env.DATASTAX_TOKEN
        const response = await fetch(
            "https://api.langflow.astra.datastax.com/lf/222e3eee-b2bf-4426-95f0-e2e320535d6a/api/v1/run/ad52d9bd-e0e5-4806-87b3-f32632584bd5?stream=false",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    input_value: payload.input,
                    output_type: "chat",
                    input_type: "chat",
                    tweaks: {
                        "File-YruBB": {},
                        "SplitText-o3Ddm": {},
                        "OpenAIEmbeddings-F9zD4": {},
                        "AstraDB-A2vK9": {},
                        "ChatInput-qjOGS": {},
                        "AstraDB-SQBJb": {},
                        "OpenAIEmbeddings-aECaq": {},
                        "ParseData-TOMJK": {},
                        "Prompt-meZZR": {},
                        "OpenAIModel-1OG0l": {},
                        "ChatOutput-VU8od": {},
                        "Memory-oNDdx": {},
                        "URL-uT02t": {},
                        "ParseData-jewA6": {}
                    }
                }),
            },
        )

        const result = await response.json();
        console.log(result)

        res.status(200).json(result.outputs[0].outputs[0].results.message.text);


    } else {
        // Handle any other HTTP method
    }
}
