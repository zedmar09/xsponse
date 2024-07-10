"use client";
import PageHeading from "@/src/components/xsponse/text/page-heading";
import { Breadcrumbs, BreadcrumbItem } from "@/src/components/xsponse/ui/breadcrumbs";
import { Card } from "@/src/components/xsponse/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/xsponse/ui/tabs";
import { Button } from "@/src/components/xsponse/ui/button";
import { Icon } from "@iconify/react";
import { Suspense, useState } from "react";
import DocumentFilter from "./all-documents/document-filter";
import DocumentDataTable from "./all-documents/document-data-table";
import GridLayout from "./all-documents/grid-layout";
import CategoryDataTable from "./all-categories/category-data-table";

const DocumentManagement: React.FC = () => {
  const [isTabular, setIsTabular] = useState<boolean>(false);

  return (
    <Suspense>
      <div className="mb-5">
        <div className="flex justify-between w-full">
          <div className="w-full">
            <PageHeading
              title="Document Management Library"
              subtitle="This module allows you to manage documents."
            />
          </div>
          <div className="w-full flex justify-end">
            <Breadcrumbs>
              <BreadcrumbItem>Document Management</BreadcrumbItem>
              <BreadcrumbItem className="text-primary">All Documents</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <Card className="p-4">
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid md:w-full lg:w-1/2 grid-cols-4">
            <TabsTrigger value="active">All Documents</TabsTrigger>
            <TabsTrigger value="inactive">All Categories</TabsTrigger>
          </TabsList>
          <div className="border border-dashed border-default-200 my-5"></div>
          <TabsContent value="active">
            <DocumentFilter />
            <div className="w-full flex justify-end mb-5">
              <Button className="mr-3" color="secondary" onClick={() => setIsTabular(false)}>
                <Icon icon="mingcute:grid-fill" className="w-6 h-6 mr-2" />
                Grid View
              </Button>

              <Button className="mr-3" color="secondary" onClick={() => setIsTabular(true)}>
                <Icon icon="ic:round-view-list" className="w-6 h-6 mr-2" />
                Tabular View
              </Button>

              <Button>
                <Icon icon="mage:file-plus-fill" className="w-6 h-6 mr-2" color="destructive" />
                Add New Document
              </Button>
            </div>

      

            {isTabular ? <DocumentDataTable /> : <GridLayout />}
          </TabsContent>
          <TabsContent value="inactive">

          <div className="w-full flex justify-end mb-5">
             
              <Button>
                <Icon icon="mage:file-plus-fill" className="w-6 h-6 mr-2" color="destructive" />
                Add New Category
              </Button>
            </div>
            <CategoryDataTable />
          </TabsContent>
        </Tabs>
      </Card>
    </Suspense>
  );
}

export default DocumentManagement;
