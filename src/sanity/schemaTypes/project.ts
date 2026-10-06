import { defineArrayMember, defineField, defineType } from 'sanity';

export const project = defineType({
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
		defineField({
			name: 'slug',
			type: 'slug',
			options: { source: 'title' },
			validation: (r) => r.required(),
		}),
		defineField({
			name: 'summary',
			type: 'text',
			rows: 3,
			description: 'One or two sentences for cards and meta descriptions.',
			validation: (r) => r.max(200),
		}),
		defineField({
			name: 'status',
			type: 'string',
			options: { list: ['shipped', 'in progress', 'experiment', 'archived'], layout: 'radio' },
			initialValue: 'in progress',
		}),
		defineField({ name: 'startedAt', title: 'Started', type: 'date' }),
		defineField({
			name: 'stack',
			type: 'array',
			of: [defineArrayMember({ type: 'string' })],
			options: { layout: 'tags' },
		}),
		defineField({
			name: 'links',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					fields: [
						defineField({ name: 'label', type: 'string' }),
						defineField({ name: 'url', type: 'url' }),
					],
				}),
			],
		}),
		defineField({ name: 'cover', type: 'image', options: { hotspot: true } }),
		defineField({
			name: 'body',
			type: 'array',
			of: [defineArrayMember({ type: 'block' }), defineArrayMember({ type: 'image' })],
		}),
		defineField({
			name: 'featured',
			type: 'boolean',
			initialValue: false,
		}),
	],
	orderings: [
		{ title: 'Newest', name: 'startedDesc', by: [{ field: 'startedAt', direction: 'desc' }] },
	],
	preview: { select: { title: 'title', subtitle: 'status', media: 'cover' } },
});
