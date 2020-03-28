const path = require('path');

exports.createPages = async ({ graphql, actions }) => {

    const result = await graphql(`
        {
            allEducacionJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    result.data.allEducacionJson.edges.forEach(element => {
        const { node } = element;

        actions.createPage({
            path: node.slug,
            component: path.resolve('./src/components/template.js'),
            context: {
                slug: node.slug
            }
        });
    });

}
