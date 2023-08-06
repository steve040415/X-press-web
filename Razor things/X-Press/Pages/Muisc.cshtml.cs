using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc;


namespace X_Press.Pages
{
    public class MusicModel : PageModel
    {
        public static void Main(string[] args)
        {
        }
        private readonly ILogger<MusicModel> _logger;

        public MusicModel(ILogger<MusicModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }

}
