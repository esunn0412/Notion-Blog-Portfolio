'use server';
import { createPost } from '@/lib/notion';
import { z } from 'zod';

const postSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  tag: z.string().min(1, 'Tag is required'),
  content: z.string().min(1, 'Content is required'),
});

export interface PostFormState {
  message: string;
  errors?: {
    title?: string[];
    tag?: string[];
    content?: string[];
  };
  formData?: PostFormData;
}

export interface PostFormData {
  title: string;
  tag: string;
  content: string;
}

export async function createPostAction(prevState: PostFormState, formData: FormData) {
  // const title = formData.get('title') as string;
  // const tag = formData.get('tag') as string;
  // const content = formData.get('content') as string;
  // const { title, tag, content } = Object.fromEntries(formData);
  // await createPost({ title: String(title), tag: String(tag), content: String(content) });

  const rawFormData = {
    title: formData.get('title') as string,
    tag: formData.get('tag') as string,
    content: formData.get('content') as string,
  };

  const validatedFields = postSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed',
      formData: rawFormData,
    };
  }

  try {
    const { title, tag, content } = validatedFields.data;

    await createPost({ title, tag, content });
    return {
      message: 'Post created successfully',
    };
  } catch (e) {
    return {
      message: 'Failed to create post : ' + e,
      formData: rawFormData,
    };
  }
}
