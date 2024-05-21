import { useEffect } from "react";
import style from "./common.module.css";

export function Comment() {
  useEffect(() => {
    const id = "comment-script";
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
      var disqus_config = function () {
      this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      */
    var d = document,
      s = d.createElement("script");
    s.src = "https://whiteboard-3.disqus.com/embed.js";
    s.setAttribute("id", id);
    s.setAttribute("data-timestamp", Date.now() + "");
    (d.head || d.body).appendChild(s);

    return () => {
      const found = document.getElementById(id);
      found && found.remove();
    };
  }, []);
  return <div id="disqus_thread" className={style.disqus}></div>;
}
