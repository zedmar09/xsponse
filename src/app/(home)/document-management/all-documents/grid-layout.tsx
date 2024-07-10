import { Icon } from '@iconify/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup } from '@/src/components/xsponse/ui/dropdown-menu';
import { Badge } from "@/src/components/xsponse/ui/badge"
import DocumentList from '@/src/components/xsponse/data-table/data/document-list';


import {
    FileText,
    Eye,
    EyeOff,
    Trash,
    Pencil,
    Edit
  } from "lucide-react"

interface Document {
    ID: number;
    DocumentName: string;
    Category: string;
    DocumentType: string;
    UploadedDate: string;
    Viewers: string;
    FileSize: number;
    Status: string;
}

interface CardComponentProps {
  document: Document;
}

const documents: Document[] = DocumentList

const CardComponent: React.FC<CardComponentProps> = ({ document }) => {
  return (
    <div className="relative border border-gray-200 p-6 rounded-md">
      <div className="absolute top-4 right-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex justify-center items-center p-2 text-sm font-medium text-gray-700 border border-transparent rounded-full focus:outline-none">
            <Icon icon="mdi:dots-vertical" fontSize={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Document Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
          <FileText className="mr-2 h-4 w-4" />
            <span>View</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Pencil className="mr-2 h-4 w-4" />
            <span>Update</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Trash className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
         
          {document?.Status == 'Visible' ?  <EyeOff className="mr-2 h-4 w-4" /> :  <Eye className="mr-2 h-4 w-4" />}
            <span>{document?.Status == 'Visible' ? 'Hide' : 'Show'}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
        </DropdownMenu>
      </div>
    
      <div className="flex justify-center items-center h-35">
        {document?.DocumentType == 'PDF' && <Icon icon='uiw:file-pdf' fontSize={80} className="text-gray-300"/>}
        {document?.DocumentType == 'MP4' && <Icon icon='octicon:video-16' fontSize={80} className="text-gray-300"/>}
        {document?.DocumentType == 'MP3' && <Icon icon='lucide:audio-lines' fontSize={80} className="text-gray-300"/>}
      </div>
     
      <h2 className="text-left mt-4 text-xl font-bold">{document?.DocumentName}</h2>

      <p className="text-left text-gray-600">{document?.Category} 
      {document?.Status == 'Visible' ?  <Badge color="success" variant="soft" className='ml-2'>Visible</Badge> :  <Badge color="destructive" variant="soft" className='ml-2'>Hidden</Badge>}
        </p>

        <div className="mt-3 flex items-center space-x-4 text-gray-600">
        <div className="flex items-center">
          <Icon icon='solar:user-bold-duotone' className="mr-1" />
          <small>{document?.Viewers}</small>
        </div>
        <div className="flex items-center">
          <Icon icon='solar:calendar-bold-duotone' className="mr-1" />
          <small>{document?.UploadedDate}</small>
        </div>
      </div>
        
    </div>
  );
};

interface DocumentGridProps {
  documents: Document[];
}

const DocumentGrid: React.FC<DocumentGridProps> = ({ documents }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {documents.map((document, index) => (
        <CardComponent document = {document}  key = {index}/>
      ))}
    </div>
  );
};

const GridLayout: React.FC = () => {
  return (
    <div className="p-4">
      <DocumentGrid documents={documents} />
    </div>
  );
};

export default GridLayout;

