using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class EditNoticeDTO
    {
        public int Id { get; set; }
        public string RouteName { get; set; }
        public string RockName { get; set; }
        public string RegionName { get; set; }
        public string NoticeDescription { get; set; }

    }
}