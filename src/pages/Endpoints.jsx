import styles from './Endpoints.module.css';

export default function Endpoints() {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/game/questions',
      description: 'Get quiz questions',
      parameters: [
        { name: 'limit', type: 'number', description: 'Number of questions (default: 10)' },
        { name: 'category', type: 'string', description: 'Question category' },
        { name: 'difficulty', type: 'string', description: 'Question difficulty (easy/medium/hard)' }
      ],
      response: '{game}'
    },
    {
      method: 'POST',
      path: '/api/game/{gameId}/player/{playerId}/question/{questionId}/answer',
      description: 'Submit answer for a question',
      parameters: [
        { name: 'gameId', type: 'string', description: 'Game identifier' },
        { name: 'playerId', type: 'string', description: 'Player identifier' },
        { name: 'questionId', type: 'string', description: 'Question identifier' },
        { name: 'answer', type: 'string', description: 'Player\'s answer' }
      ],
      response: '{"playerId": "789","answer": "Coding language"}'
    },
    {
      method: 'GET',
      path: '/api/game/{gameId}/scores',
      description: 'Get game scores',
      parameters: [
        { name: 'gameId', type: 'string', description: 'Game identifier' }
      ]
    },
    {
      method: 'PUT',
      path: '/api/admin/question',
      description: 'Create new question',
      response: 'new question'
    },
    {
      method: 'UPDATE',
      path: '/api/admin/question/{questionId}',
      description: 'Update existing question',
      parameters: [
        { name: 'questionId', type: 'string', description: 'Question identifier' }
      ]
    },
    {
      method: 'DELETE',
      path: '/api/admin/question/{questionId}',
      description: 'Delete question',
      parameters: [
        { name: 'questionId', type: 'string', description: 'Question identifier' }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TheQuizz API Documentation</h1>
      <div className={styles.overview}>
        <h2>Overview</h2>
        <p>This API provides a computer science quiz as a proof of concept. The quiz format is designed to be fun and engaging, suitable for social gatherings.</p>
      </div>
      {endpoints.map((endpoint, index) => (
        <div key={index} className={styles.endpointCard}>
          <div className={styles.endpointHeader}>
            <span className={`${styles.method} ${styles[endpoint.method.toLowerCase()]}`}>
              {endpoint.method}
            </span>
            <span className={styles.endpointPath}>{endpoint.path}</span>
          </div>
          <p className={styles.description}>{endpoint.description}</p>
          {endpoint.parameters && endpoint.parameters.length > 0 && (
            <div className={styles.parameters}>
              <h3>Parameters:</h3>
              {endpoint.parameters.map((param, pIndex) => (
                <div key={pIndex} className={styles.parameter}>
                  <span className={styles.parameterName}>{param.name}</span>
                  <span className={styles.parameterType}> ({param.type})</span>
                  <p className={styles.parameterDesc}>{param.description}</p>
                </div>
              ))}
            </div>
          )}
          {endpoint.response && (
            <div className={styles.response}>
              <h3>Response:</h3>
              <code>{endpoint.response}</code>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}