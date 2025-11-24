# FriendMatchAI --- README.md

FriendMatchAI is an AI-powered friend-matching platform that connects
people based on their texting style, interests, personality, and
real-world filters like age and distance. Users onboard through an LLM
chat, generating embeddings stored in a vector database.

## Features

-   LLM-based onboarding
-   Embedding extraction
-   Vector similarity search
-   Distance & age filters
-   FastAPI backend
-   Next.js frontend

## How to Run Backend

1.  `cd backend`
2.  Create venv
3.  `pip install -r requirements.txt`
4.  Add `.env`
5.  `uvicorn app.main:app --reload`

## How to Run Frontend

1.  `cd frontend`
2.  `npm install`
3.  Add `.env.local`
4.  `npm run dev`

## Contributing

1.  Fork repo
2.  PR via feature branches
