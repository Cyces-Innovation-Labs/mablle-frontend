import { useState } from "react";
import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";
import { Pencil, PencilLine } from "lucide-react";
import PortfolioProjectCard, {
  type PortfolioProjectData,
} from "./components/PortfolioProjectCard";
import ClientReviewCard, { type ClientReviewData } from "./components/ClientReviewCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DesignerPortfolioPage = () => {
  const [reviewFilter, setReviewFilter] = useState("latest");

  // Profile data
  const profileData = {
    bio: "Hi, I'm Lincoln Ainsworth! I specialize in turning ideas into practical, stylish homes. My focus is on creating spaces that reflect your lifestyle — whether it's a cozy family nook or a sleek, modern apartment.",
    languages: "English, Spanish",
    yearsExperience: "8+",
    spacesDesigned: "120+",
  };

  // Featured Projects data
  const featuredProjects: PortfolioProjectData[] = [
    {
      id: "featured-1",
      name: "CAIRNHILL CIRCLE",
      badge: "Closed project",
      tags: ["Condo", "Minimalist", "Modern"],
      type: "featured",
      imageUrl: "/project-sample.jpg",
    },
    {
      id: "featured-2",
      name: "CAIRNHILL CIRCLE",
      badge: "Own project",
      tags: ["Condo", "Minimalist", "Modern"],
      type: "featured",
      imageUrl: "/project-sample.jpg",
    },
    {
      id: "featured-3",
      name: "CAIRNHILL CIRCLE",
      badge: "Closed project",
      tags: ["Condo", "Minimalist", "Modern"],
      type: "featured",
      imageUrl: "/project-sample.jpg",
    },
  ];

  // Archived Projects data
  const archivedProjects: PortfolioProjectData[] = [
    {
      id: "archived-1",
      name: "CAIRNHILL CIRCLE",
      badge: "Closed project",
      tags: ["Condo", "Minimalist", "Modern"],
      type: "archived",
      imageUrl: "/project-sample.jpg",
    },
    {
      id: "archived-2",
      name: "CAIRNHILL CIRCLE",
      badge: "Own project",
      tags: ["Condo", "Minimalist", "Modern"],
      type: "archived",
      imageUrl: "/project-sample.jpg",
    },
    {
      id: "archived-3",
      name: "CAIRNHILL CIRCLE",
      badge: "Own project",
      tags: ["Condo", "Minimalist", "Modern"],
      type: "archived",
      imageUrl: "/project-sample.jpg",
    },
  ];

  // Client Reviews data
  const clientReviews: ClientReviewData[] = [
    {
      id: "review-1",
      clientName: "Kandy Durwart",
      affiliation: "MICROSOFT",
      rating: 5,
      date: "23rd Sep 2023",
      reviewText: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isPublished: false,
    },
    {
      id: "review-2",
      clientName: "Kandy Durwart",
      affiliation: "MICROSOFT",
      rating: 5,
      date: "23rd Sep 2025",
      reviewText: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isPublished: true,
    },
    {
      id: "review-3",
      clientName: "Kandy Durwart",
      affiliation: "MICROSOFT",
      rating: 5,
      date: "23rd Sep 2023",
      reviewText: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isPublished: false,
    },
  ];

  const handleAddProject = () => {
    console.log("Add new project");
  };

  const handlePublishReview = (reviewId: string) => {
    console.log("Publish review", reviewId);
  };

  return (
    <div className="space-y-10 bg-white p-6 shadow-sm rounded-lg">
      {/* Profile Summary Section */}
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-1 h-6 bg-[#054D8B] rounded"></div>
          <AppText type="h3" className="text-lg font-semibold text-gray-900">
          Displayed on Portfolio
          </AppText>
        </div>
        
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
          >
            
            <span className="text-sm font-semibold text-[#054D8B] underline">Edit</span>
            <PencilLine className="w-4 h-4 text-[#054D8B]" />
          </Button>
       
      </div>

        {/* Profile Content */}
        <div className="space-y-4 mt-10">
          {/* Bio */}
          <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <AppText type="h3" className="text-md font-semibold text-primary mb-2">
              Bio
            </AppText>
            <AppText type="p" className="text-sm text-primary">
              {profileData.bio}
            </AppText>
          </div>

          {/* Languages */}
          <div>
            <AppText type="h3" className="text-md font-semibold text-primary mb-2">
              Languages Spoken
            </AppText>
            <AppText type="span" className="text-sm text-[#71717A]">
              {profileData.languages}
            </AppText>
          </div>
          </div>

          {/* Stats */}
          <div>
            <AppText type="h3" className="text-md font-semibold text-primary mb-2">
              Stats
            </AppText>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <AppText type="p" className="text-sm text-[#09090B] mb-1">
                  Years experience
                </AppText>
                <AppText type="h3" className="text-sm font-medium text-[#71717A]">
                  {profileData.yearsExperience}
                </AppText>
              </div>
              <div>
                <AppText type="p" className="text-sm text-[#09090B] mb-1">
                  Spaces designed
                </AppText>
                <AppText type="h3" className="text-sm font-medium text-[#71717A]">
                  {profileData.spacesDesigned}
                </AppText>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <AppText type="h2" className="text-lg font-semibold text-gray-900">
            Featured Projects
          </AppText>
          <Button
            onClick={handleAddProject}
            className="bg-gray-900 text-white hover:bg-gray-800"
          >
            Add a new Project
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <PortfolioProjectCard
              key={project.id}
              project={project}
              onEdit={() => console.log("Edit", project.id)}
              onArchive={() => console.log("Archive", project.id)}
              onDelete={() => console.log("Delete", project.id)}
            />
          ))}
        </div>
      </div>

      {/* Archived Projects Section */}
      <div>
        <AppText type="h2" className="text-lg font-semibold text-gray-900 mb-4">
          Archived Projects
        </AppText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {archivedProjects.map((project) => (
            <PortfolioProjectCard
              key={project.id}
              project={project}
              onEdit={() => console.log("Edit", project.id)}
              onFeature={() => console.log("Feature", project.id)}
              onDelete={() => console.log("Delete", project.id)}
            />
          ))}
        </div>
      </div>

      {/* Client Reviews Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <AppText type="h2" className="text-lg font-semibold text-gray-900">
            Client Reviews
          </AppText>
          <div className="flex items-center gap-2">
            <Select value={reviewFilter} onValueChange={setReviewFilter}>
              <SelectTrigger className="w-[120px] border-gray-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          {clientReviews.map((review) => (
            <ClientReviewCard
              key={review.id}
              review={review}
              onPublish={() => handlePublishReview(review.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignerPortfolioPage;
