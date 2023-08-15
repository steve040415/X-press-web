using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc;


namespace X_Press.Pages
{
    public class GalleryModel : PageModel
    {
        public static void Main(string[] args)
        {
        }
        private readonly ILogger<GalleryModel> _logger;

        public GalleryModel(ILogger<GalleryModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }

}

