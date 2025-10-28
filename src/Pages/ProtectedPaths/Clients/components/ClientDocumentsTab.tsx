import AppText from "@/components/Commmon/AppText";
// import { useOutletContext } from "react-router";
import { Button } from "@/components/ui/button";
import { Upload, Download, FileText, File } from "lucide-react";

const ClientDocumentsTab = () => {
  // const client = useOutletContext<any>();

  // Mock documents data
  const documents = [
    { id: "doc-1", name: "Property Documents.pdf", type: "pdf", size: "2.4 MB", date: "Jan 6, 2025" },
    { id: "doc-2", name: "Contract Agreement.pdf", type: "pdf", size: "1.8 MB", date: "Jan 5, 2025" },
    { id: "doc-3", name: "Floor Plan.png", type: "image", size: "3.2 MB", date: "Jan 4, 2025" },
  ];

  const handleUpload = () => {
    console.log("Upload document");
  };

  const handleDownload = (docId: string) => {
    console.log("Download document", docId);
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-gray-200">
        <div>
          <AppText type="h3" className="font-semibold text-gray-900 mb-1">
            Upload Documents
          </AppText>
          <AppText type="span" className="text-sm text-gray-600">
            Upload contract, agreements, and other documents
          </AppText>
        </div>
        <Button onClick={handleUpload} className="bg-gray-900 text-white hover:bg-gray-800">
          <Upload className="w-4 h-4 mr-2" />
          Upload
        </Button>
      </div>

      {/* Documents List */}
      <div className="space-y-3">
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {doc.type === "pdf" ? (
                  <FileText className="w-8 h-8 text-red-600" />
                ) : (
                  <File className="w-8 h-8 text-blue-600" />
                )}
                <div>
                  <AppText type="p" className="font-medium text-gray-900">
                    {doc.name}
                  </AppText>
                  <AppText type="span" className="text-sm text-gray-600">
                    {doc.size} • {doc.date}
                  </AppText>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => handleDownload(doc.id)}>
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientDocumentsTab;

