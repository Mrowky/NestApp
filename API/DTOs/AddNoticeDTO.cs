using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class AddNoticeDTO
    {
        [Required]
        public string RouteName { get; set; }
        [Required]
        public string RockName { get; set; }
        [Required]
        public string RegionName { get; set; }
        [Required]
        public string NoticeDescription { get; set; }

    }
}