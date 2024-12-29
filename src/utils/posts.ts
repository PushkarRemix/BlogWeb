interface Post {
  title: string;
  description: string;
  image: string;
  href: string;
  date: string;
  category: string;
}

export async function getTrendingPosts(): Promise<Post[]> {
  // In a real app, this would fetch from a database or API
  return [
    {
      title: "Top 10 AI Tools for Productivity",
      description: "Discover the most powerful AI tools that are revolutionizing workflow automation and productivity.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      href: "/posts/top-10-ai-tools",
      date: "2024-01-20",
      category: "Technology"
    },
    {
      title: "Top 10 Hidden Gems in Europe",
      description: "Explore these lesser-known European destinations that offer unique experiences and authentic culture.",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
      href: "/posts/top-10-hidden-gems-europe",
      date: "2024-01-18",
      category: "Travel"
    },
    {
      title: "Top 10 Smart Home Devices",
      description: "Transform your home with these innovative smart devices that make life easier and more convenient.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      href: "/posts/top-10-smart-home-devices",
      date: "2024-01-15",
      category: "Gadgets"
    }
  ];
}