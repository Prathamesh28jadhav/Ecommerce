// testModels.js

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Use your actual API key here or from environment
const genAI = new GoogleGenerativeAI("YOUR_GEMINI_API_KEY"); // or use process.env.GEMINI_API_KEY

async function listAvailableModels() {
  try {
    const result = await genAI.listModels();
    console.log("Available models:\n");
    result.models.forEach((model) => {
      console.log(`Model: ${model.name}`);
      console.log(`  Description: ${model.description}`);
      console.log(`  Supported Generation Methods: ${model.supportedGenerationMethods.join(", ")}`);
      console.log("------------------------------");
    });
  } catch (error) {
    console.error("Error fetching models:", error);
  }
}

listAvailableModels();
