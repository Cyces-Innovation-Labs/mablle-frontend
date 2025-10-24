# Dashboard Components

This directory contains all the dashboard components used in the DashboardPage.

## Components

### ProjectsContainer
- Displays project statistics with a main gradient card and sub-cards
- Shows total projects, active projects, and completed projects
- Includes percentage changes and icons
- Props: `data?: ProjectStats`

### TasksContainer  
- Displays a dynamic list of tasks with counts and percentage changes
- Supports nested task items (like "Payments pending" with sub-tasks)
- Props: `data?: TaskItem[]`

### ProjectDistributionChart
- Bar chart showing project distribution across different statuses (NL, QL, BK, CF, FC, HO)
- Uses Recharts library for visualization
- Props: `data?: ProjectDistributionData[]`

### UsersContainer
- Shows user statistics (clients and designers onboarded)
- Simple card-based layout
- Props: `data?: UserStats`

### SupportTicketsChart
- Pie chart showing resolved vs open support tickets
- Includes legend and center total count
- Uses Recharts library for visualization
- Props: `data?: SupportTicketData[]`

## Usage

All components are designed to work with default data if no props are provided, making them easy to use out of the box. They can be customized by passing custom data through their respective props.

## Dependencies

- Recharts for chart components
- Lucide React for icons
- Tailwind CSS for styling
- AppText component for consistent typography
