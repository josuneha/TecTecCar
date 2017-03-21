import java.sql.*;
import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class Menu extends HttpServlet {
     Connection connection;
	 
	public void init(ServletConfig config) throws ServletException {
		super.init(config);
		try {
			Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
			String url="jdbc:odbc:TecTecCar";
			connection=DriverManager.getConnection(url); 
		} catch(Exception e) {
			e.printStackTrace();
		}
		System.out.println("Iniciando menu...");
	}
	
	public void destroy() {
		System.out.println("No hay nada que hacer...");
	}
  
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException  {
		res.setContentType("text/html");
        PrintWriter toClient = res.getWriter();	
		
        toClient.println("<HTML>");
        toClient.println("<head>");
        toClient.println("<title>TEC TEC CAR</title>");
        toClient.println("</head>");
		  toClient.println("<link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"css/estilo.css\">");
     toClient.println("<link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"css/slider.css\">");
     toClient.println("<script src=\"js/jquery-1.7.min.js\"></script>");
     toClient.println("<script src=\"js/tms-0.4.x.js\"></script>");
     toClient.println("<script src=\"js/jquery.jqtransform.js\"></script>");

     toClient.println("<script>");
		 toClient.println("$(document).ready(function(){");
			 toClient.println("$('.form-1').jqTransform();	");				   	
			 toClient.println("$('.slider')._TMS({");
				 toClient.println("show:0,");
				 toClient.println("pauseOnHover:true,");
				 toClient.println("prevBu:'.prev',");
				 toClient.println("nextBu:'.next',");
				 toClient.println("playBu:false,");
				 toClient.println("duration:1000,");
				 toClient.println("preset:'fade',");
				 toClient.println("pagination:true,");
				 toClient.println("pagNums:false,");
				 toClient.println("slideshow:7000,");
				 toClient.println("numStatus:false,");
				 toClient.println("banners:false,");
				 toClient.println("waitBannerAnimation:false,");
				 toClient.println("progressBar:false");
			 toClient.println("})");		
		 toClient.println("});");
	 toClient.println("</script>");
		
			 toClient.println("<header>");
     toClient.println("<div>");
		toClient.println("<h1><a href=\"TecTecCar.html\"><img src=\"logo.jpg\"></a></h1>");
       		toClient.println("<div class=\"social-icons\">");
		
		toClient.println("<p align=\"right\"><a href=\" https://www.facebook.com/profile.php?id=100011209128997\"><img src=\"facebook.png\" style=\"width: 50px; height: 30px;\"> </a>");
        toClient.println("<a href=\" https://www.twitter.com/tecteccar\"> <img src=\"twitter.jpg\" style=\"width: 50px; height: 30px;\"></a></p>");
		toClient.println("<TR>");
		

;
		

         toClient.println("<div id=\"slide\">");
             toClient.println("<div class=\"slider\">");
                 toClient.println("<ul class=\"items\">");
                     toClient.println("<li><img src=\"foto1.jpg\"  /></li>");
                       toClient.println("<li><img src=\"foto2.jpg\"  /></li>");
     
                 toClient.println("</ul>");
             toClient.println("</div>");	
             toClient.println("<a href=\"#\" class=\"prev\"></a><a href=\"#\" class=\"next\"></a>");
         toClient.println("</div>");
         toClient.println("<nav>");
             toClient.println("<ul class=\"menu\">");
                toClient.println("<li class=\"current\"><a href=\"Account.html\">My account</a></li>");
				  toClient.println("<li><a href=\"Route.html\">Route</a></li>");
             toClient.println("</ul>");
         toClient.println("</nav>");
     toClient.println("</div>");
 toClient.println("</header>");   
  
     
        

   
        toClient.println("</TABLE>");
        toClient.println("</body>");
        toClient.println("</html>");
	
		toClient.close();
	  }
     
}