const { getCommits, isValidUsername, isValidRepo } = require('../services/github.service')

const schema = {
  params: {
    type: 'object',
    properties: {
      owner: { type: 'string' },
      repo: { type: 'string' }
    },
    required: ['owner', 'repo']
  }
}
/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function routes (fastify, options) {
  fastify.get('/commits/:owner/:repo', { schema }, async (request, reply) => {
    try {
      const { owner, repo } = request.params
      const { isValid, message } = await isValidUsername(owner)
      if (!isValid) {
        return reply.code(404).send({ message })
      }
      const { isValid: isValidRepository, message: msg } = await isValidRepo(owner, repo)
      if (!isValidRepository) {
        return reply.code(404).send({ message: msg })
      }
      const commits = await getCommits(owner, repo)
      const data = commits.map(commit => {
        return {
          sha: commit.sha,
          author: commit.commit?.committer?.name || '',
          email: commit.commit?.committer?.email || '',
          message: commit.commit?.message || '',
          date: new Date(commit.commit?.committer?.date) || new Date(commit.commit?.author?.date) || new Date(),
          avatar: commit.author?.avatar_url || 'https://i.stack.imgur.com/frlIf.png'
        }
      })
      reply.code(200).send({ message: 'commits', data, qty: data.length })
    } catch (error) {
      console.log('🚀 ~ file: index.js ~ line 15 ~ fastify.get ~ error', error)
      reply.code(500).send({ message: 'Internal server error' })
    }
  })
}

module.exports = routes
