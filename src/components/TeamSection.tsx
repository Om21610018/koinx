import React from 'react';
import sec1 from "../../assets/tokenomics1.png";
import sec2 from "../../assets/tokenomics2.png";
import sec3 from "../../assets/tokenomics3.png";

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  description: string;
  imageUrl: string;
}

interface TeamSectionProps {
  title?: string;
  description?: string;
  members?: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ 
  title = "Team",
  description = "Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.",
  members = [
    {
      id: 1,
      name: "John Smith",
      designation: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      imageUrl: sec1
    },
    {
      id: 2,
      name: "Elina Williams",
      designation: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      imageUrl: sec2
    },
    {
      id: 3,
      name: "John Smith",
      designation: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      imageUrl: sec3
    }
  ]
}) => {
  return (
    <div className="w-full mx-auto p-6">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-4">
          {members.map((member) => (
            <div 
              key={member.id}
              className="bg-blue-50 rounded-lg p-4 md:p-6"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.designation}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;