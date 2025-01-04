const BACKEND_PATH = 'http://127.0.0.1:8000';

export const parsePipeline = async (pipelineData) => {
  const response = await fetch(`${BACKEND_PATH}/pipelines/parse`, {
    method: 'POST',
    body: JSON.stringify(pipelineData),
    headers: { 'Content-Type': 'application/json' }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
