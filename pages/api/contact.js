import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    try {
      const client = await clientPromise;
      const db = client.db("portfolio"); // Replace with your database name
      const collection = db.collection("messages");

      // Insert the message into the database
      const result = await collection.insertOne({
        name,
        email,
        message,
        createdAt: new Date(),
      });

      return res.status(200).json({
        message: "Your message has been saved successfully!",
        result,
      });
    } catch (error) {
      console.error("Error saving message to MongoDB:", error);
      return res
        .status(500)
        .json({ message: "An error occurred while saving your message." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
