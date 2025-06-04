import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blogLoader = glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' });

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: blogLoader,
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };
