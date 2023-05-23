export interface BlogsQuery {
    allBlog: AllBlog;
}

interface AllBlog {
    nodes: Node[];
}

export interface BlogNode {
    slug: string;
    blog: Blog;
    date: Date;
    id: string
}

interface Blog {
    blogPostTekst: null;
    blogPostZagolovok: null;
    blogPostImageKompyuter1x: BlogPostImage;
    blogPostImageKompyuter2x: BlogPostImage;
    blogPostImageTelefon1x: BlogPostImage;
    blogPostImageTelefon2x: BlogPostImage;
}

interface BlogPostImage {
    sourceUrl: string;
}

