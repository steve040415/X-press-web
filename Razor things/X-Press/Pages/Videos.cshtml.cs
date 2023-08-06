using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc;


namespace X_Press.Pages
{
    public class VideoModel : PageModel
    {
        public static void Main(string[] args)
        {
        }
        private readonly ILogger<VideoModel> _logger;

        public VideoModel(ILogger<VideoModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }

}