using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc;


namespace X_Press.Pages
{
    public class HistoryModel : PageModel
    {
        public static void Main(string[] args)
        {
        }
        private readonly ILogger<HistoryModel> _logger;

        public HistoryModel(ILogger<HistoryModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }

}