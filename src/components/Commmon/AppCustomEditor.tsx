// import { useEffect } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const AppCustomEditor = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) => {


  // useEffect(() => {
    // const Link = Quill.import("core/module");

    // class MyLink extends Link {
    //   convert(html: string) {
    //     // Fix links without protocol
    //     html = html.replace(
    //       /<a[^>]+href="(?!https?:\/\/)([^"]+)"[^>]*>/gi,
    //       (match, href) => {
    //         if (href.match(/^[\w.-]+\.[a-z]{2,}$/i)) {
    //           // Looks like a bare domain
    //           return match.replace(href, `https://${href}`);
    //         }
    //         return match;
    //       }
    //     );
    //     return super.convert(html);
    //   }
    // }

    // Quill.register("core/module", MyLink, true);

    // var Link = Quill.import('modules/link');
    // class MyLink extends Link {
    //   static create(value) {
    //     const node = super.create(value);
    //     node.removeAttribute('target');
    //     return node;
    //   }
    // }
    // Quill.register(MyLink, true);



  // }, []);


  return <ReactQuill value={value} onChange={setValue} theme="snow" />;
};

export default AppCustomEditor;
